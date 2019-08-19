let testObject = {
  click: function () {
    setTimeout( () => {
      console.log("my value is:" + this.value);
    }, 1000);
  }
};
testObject.click();