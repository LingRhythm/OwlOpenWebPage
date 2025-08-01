function jumpPage(searchValue) {
    var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp=new RegExp(Expression);
    if(objExp.test(searchValue)==true){
        window.location.href=searchValue;
    }
    else
    {
        window.location.href="http://www.baidu.com/s?ie=UTF-8&wd="+searchValue;
    }
  }
  function entersearch(event){
      if (event.keyCode == 13)
      {
          to();
      }
  }
  // 按钮点击触发函数
  function to(){
      var searchValue = document.getElementById("input").value;
     jumpPage(searchValue);
  }