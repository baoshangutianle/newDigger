export default{
  install(Vue,options){
    //返回今天日期(xxxxxxxx)
    Vue.prototype.getNowDate = function (type) {
      let myDate = new Date();
      let year = myDate.getFullYear()+'';
      let month= myDate.getMonth()+1+'';
      let date= myDate.getDate()+'';
      if (month.length===1){
        month = '0' + month
      }
      if (date.length===1){
        date = '0' + date
      }
      if(type == '-'){
        return year + '-' + month + '-' + date
      }else{
        return year+month+date
      }
      console.log(year+month+date);
    }
  }
}

