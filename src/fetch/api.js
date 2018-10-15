import axios from 'axios'
import qs from 'qs'


// axios 配置
axios.defaults.timeout = 30000;
console.log(axios);
//测试
let url1 = 'http://uat.xinyusoft.com:90/digg/ESBServlet';
// 正式
// let url1 = 'http://digg.xinyusoft.com/digg/ESBServlet';
// 服务器
// let url1 = './ESBServlet';

//上传文件
// 测试
let url2 = 'http://uat.xinyusoft.com:90/digg/UploadImage'
let url3 = 'http://uat.xinyusoft.com:90/digg/UploadFileServlet'
//正式
// let url2 = 'http://digg.xinyusoft.com/digg/UploadImage';

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    if (config.baseURL!=url2 && config.baseURL!=url3){
      // console.log(config)
      config.data = qs.stringify(config.data);
    }
  }
  return config;
},(error) =>{
  // alert("错误的传参", 'fail');
  return Promise.reject(error);
});

//在main.js设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config;
  if(!config || !config.retry) return Promise.reject(err);
  config.__retryCount = config.__retryCount || 0;
  if(config.__retryCount >= config.retry) {
    return Promise.reject(err);
  }
  config.__retryCount += 1;
  var backoff = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, config.retryDelay || 1);
  });
  return backoff.then(function() {
    return axios(config);
  });
});

export function fetch(url, params,use) {
  if (use != 'b' && use != 'c') {//普通
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    axios.defaults.baseURL=url1
  } else if (use =='b'){//上传文件
    axios.defaults.headers.post['Content-Type'] ='multipart/form-data';
    axios.defaults.baseURL=url2
  } else if (use =='c'){//上传文件
    axios.defaults.headers.post['Content-Type'] ='multipart/form-data';
    axios.defaults.baseURL=url3
  }

  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default{
  /* 获取人员 */
  getemployeelist(params) {
    params.command = "digg.p_getemployeelist";
    return fetch('', params)
  },
}


