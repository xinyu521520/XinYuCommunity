function verifyNational(key) {
  var lowful = false;
  $.ajax({
    url: "m?xwl=ithc/appoint/personalAppointment/publicPart/verifyNational",
    async: false,
    data: "key="+key,
    dataType: "json",
    success: function(rs) {
      lowful = rs.total > 0;
    }
  });
  return lowful;
}

function checkNational() {
    var NationalBox = document.getElementById('national').value;
    if (NationalBox == "") {
        $("#nationalError").html('&nbsp;国籍不能为空。');
        $("#nationalError").show();
        $('#nationalError').css("color", "red");
        errorShow("国籍不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#nationalError").html('');
        $("#nationalError").hide();
    }
    
    var key = $("#national").attr("key");
    var lowful = verifyNational(key);
    if (lowful) {
        errorShow_clear();
        $("#nationalError").html('');
        $("#nationalError").hide();
    } else {
        $("#nationalError").html('&nbsp;国籍填写错误，请重新填写。');
        $("#nationalError").show();
        $('#nationalError').css("color", "red");
        errorShow("国籍填写错误，请重新填写。"); return false;
      return;
    }

//	var nationalID = $('#national').val();
//	var IDType1 = '<option value=""></option><option value="000001">身份证</option><option value="000002">护照</option>';
//	var IDType2 = '<option value=""></option><option value="000001">身份证</option>';
//	if("000043" == nationalID){
//		$("#IDType").html(IDType2);
//	}
//	else{
//		$("#IDType").html(IDType1);
//	}
    return;
}

function checkAppointSite() {
    var AppointSite = document.getElementById('appointSite').value;
    if (AppointSite == "") {
        $("#appointSiteError").html('&nbsp;体检场所不能为空。');
        $("#appointSiteError").show();
        $('#appointSiteError').css("color", "red");
        errorShow("体检场所不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#appointSiteError").html('');
        $("#appointSiteError").hide();
    }
    return;
}


function checkName() {
    var reg0 = /^([A-Za-z\u4E00-\u9FA5\s]{1,30})+$/;
    var userSureNameBox = document.getElementById('name').value;
    if (userSureNameBox == "" || userSureNameBox.length < 1) {
        $("#nameError").html('&nbsp;您的姓名不能为空，只能由1到30位字母或汉字组成。');
        $("#nameError").show();
        $('#nameError').css("color", "red");
        errorShow("您的姓名不能为空，只能由1到30位字母或汉字组成。"); return false;
    } else {
        errorShow_clear();
        $("#nameError").html('');
        $("#nameError").hide();
    }

    if (!reg0.test(userSureNameBox)) {

        $("#nameError").html('&nbsp;您的姓名只能由1到30位字母或汉字组成。');
        $("#nameError").show();
        $('#nameError').css("color", "red");
        errorShow("您的姓名只能由1到30位字母或汉字组成。"); return false;
    } else {
        errorShow_clear();
        $("#nameError").html('');
        $("#nameError").hide();
    }


    if (!checkValidInput(userSureNameBox)) {
        $("#nameError").html('&nbsp;请不要输入非法的字符。');
        $("#nameError").show();
        $('#nameError').css("color", "red");
        errorShow("您的姓名请不要输入非法的字符。"); return false;
    }
    else {
        errorShow_clear();
        SetVal();
        $("#nameError").html('');
        $("#nameError").hide();
    }
    return;
}


function checkNamePinYin() {
    var reg0 = /^([A-Za-z\s]{1,30})+$/;
    var userSureNamePinYinBox = document.getElementById('namePinYin').value;
    if (userSureNamePinYinBox == "" || userSureNamePinYinBox.length < 1) {

        $("#namePinYinError").html('&nbsp;您的姓名拼音不能为空，只能由1到30位字母组成。');
        $("#namePinYinError").show();
        $('#namePinYinError').css("color", "red");
        errorShow("您的姓名拼音不能为空，只能由1到30位字母组成。"); return false;
    } else {
        errorShow_clear();
        $("#namePinYinError").html('');
        $("#namePinYinError").hide();

    }

    if (!reg0.test(userSureNamePinYinBox)) {

        $("#namePinYinError").html('&nbsp;您的姓名拼音只能由1到30位字母组成。');
        $("#namePinYinError").show();
        $('#namePinYinError').css("color", "red");
        errorShow("您的姓名拼音只能由1到30位字母组成。"); return false;
    } else {
        errorShow_clear();
        $("#namePinYinError").html('');
        $("#namePinYinError").hide();
    }

    if (!checkValidInput(userSureNamePinYinBox)) {
        $("#namePinYinError").html('&nbsp;请不要输入非法的字符。');
        $("#namePinYinError").show();
        $('#namePinYinError').css("color", "red");
        errorShow("您的姓名拼音请不要输入非法的字符。"); return false;
    }

    else {
        errorShow_clear();
        $("#namePinYinError").html('');
        $("#namePinYinError").hide();
    }
    return;
}

function checkDateOfBirth() {

    var DateOfBirthBox = document.getElementById('dateOfBirth').value;

    if (DateOfBirthBox == "" || DateOfBirthBox.length != 10) {
        $("#dateOfBirthError").html('&nbsp;出生日期输入有误。');
        $("#dateOfBirthError").show();
        $('#dateOfBirthError').css("color", "red");
        errorShow("出生日期输入有误"); return false;
    }
    else {

        var myDate = new Date();
        var st = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate() + " 23:59:59";
        var et = DateOfBirthBox + " 0:0:0";;
        var stdt = new Date(st.replace("-", "/"));
        var etdt = new Date(et.replace("-", "/"));

        if (stdt < etdt) {

            $("#dateOfBirthError").html('&nbsp;出生日期输入时间有误。');
            $("#dateOfBirthError").show();
            $('#dateOfBirthError').css("color", "red");
            errorShow("出生日期输入时间有误。"); return false;

        } else {
            errorShow_clear();
            $("#dateOfBirthError").html('');
            $("#dateOfBirthError").hide();
        }
        getAge();
        
    }

    var a = /^(\d{4})-(\d{2})-(\d{2})$/
    if (!a.test(DateOfBirthBox)) {
        $("#dateOfBirthError").html('&nbsp;出生日期输入有误。');
        $("#dateOfBirthError").show();
        $('#dateOfBirthError').css("color", "red");
        errorShow("出生日期输入有误。"); return false;

    }
    else {
        errorShow_clear();
        $("#dateOfBirthError").html('');
        $("#dateOfBirthError").hide();
        getAge();
    }
}

function checkAge(){
    var ageBox = document.getElementById('age').value;
    if (ageBox < 0) {
        $("#ageError").html('&nbsp;年龄输入有误。');
        $("#ageError").show();
        $('#ageError').css("color", "red");
        errorShow("年龄输入有误。"); return false;

    }
    else {
        errorShow_clear();
        $("#ageError").html('');
        $("#ageError").hide();
        getAge();
    }
}

function checkIDType(){
    var IDTypeBox = document.getElementById('IDType').value;
    if (IDTypeBox == "" || IDTypeBox.length < 1) {
        $("#IDTypeError").html("&nbsp;请输入证件类型。");
        $("#IDTypeError").show();
        $('#IDTypeError').css("color", "red");

        errorShow("证件类型输入有误。"); return false;

    } else {
        errorShow_clear();
        $("#IDTypeError").html('');
        $("#IDTypeError").hide();
        
        if (!($("#IDNumber").val() == "" || $("#IDNumber").val().length < 1)) {
            checkIDNumber();
        }
    }
}

function checkIDNumber() {
    
    var IDType = $("#IDType").find("option:selected").text();

    //身份证判断
    if (IDType.indexOf("身份证") >= 0) {
        
        if (!isCorrectCardNumber($("#IDNumber").val())) {
            
            $("#IDNumberError").html('&nbsp;身份证格式有误！');
            $("#IDNumberError").show();
            $('#IDNumberError').css("color", "red");
            errorShow("身份证格式有误。"); return false;
        } else {
            $("#IDNumberError").html('');
            $("#IDNumberError").hide();
            errorShow_clear();
            setIDNumberInfo();
        }

    } else {

        var IDNumberBox1 = document.getElementById('IDNumber').value;

        if (IDNumberBox1 == "" || IDNumberBox1.length < 2) {
            $("#IDNumberError").html("&nbsp;请输入证件号码");
            $("#IDNumberError").show();
            $('#IDNumberError').css("color", "red");
            errorShow("请输入证件号码。"); return false;
        }
        else {
            $("#IDNumberError").html('');
            $("#IDNumberError").hide();
            errorShow_clear();
        }

    }
}

function setIDNumberInfo() {
    var IDNumber = $("#IDNumber").val();
	/*根据长度判断是否为身份证号*/
	if (! (IDNumber.length == 18 || IDNumber.length == 15)) {
		return;
	}
	/*校验15位身份证号，并转为18位身份证号*/
	var IDNumber18 = Bee.IdCardUtils.idCard15To18(IDNumber);
	if (IDNumber18.length == 18) { //转换成功
		IDNumber = IDNumber18;
	}
	/*校验18位身份证号*/
	var res = Bee.IdCardUtils.isIdCard18(IDNumber);
	if (!res) {
		return;
	}
	var IDInfo = Bee.IdCardUtils.getPersonInfo18(IDNumber);
	var sex = IDInfo.sex;
	var birthday = IDInfo.birthday;
    $("#sex").val("男" == sex ? "1":"2");
    $("#dateOfBirth").val(birthday);
}

function isCorrectCardNumber(IDNumber){
    /*校验15位身份证号，并转为18位身份证号*/
    var IDNumber18 = Bee.IdCardUtils.idCard15To18(IDNumber);
    if(IDNumber18.length ==18){//转换成功
        IDNumber = IDNumber18;
    }
    /*校验18位身份证号*/
    var res = Bee.IdCardUtils.isIdCard18(IDNumber);
    return res;
}

function dateformat() {
    var DateOfBirthValue = $("#DateOfBirth").val();
    DateOfBirthValue = DateOfBirthValue.replace("-", "");
    DateOfBirthValue = DateOfBirthValue.replace("-", "");
    vars0 = DateOfBirthValue;
    return vars0;
}


function getAge() {
    var birthday = document.getElementById('dateOfBirth').value;
    //出生时间 毫秒
    var birthDayTime = new Date(birthday).getTime(); 
    //当前时间 毫秒
    var nowTime = new Date().getTime(); 
    //一年毫秒数(365 * 86400000 = 31536000000)
    var age = Math.ceil((nowTime-birthDayTime)/31536000000);
    document.getElementById("age").value = age;
}



function checkSex(){
    var sex = document.getElementById('sex').value;
    if (sex == "" || sex.length < 1) {
        $("#sexError").html("&nbsp;请输入性别。");
        $("#sexError").show();
        $('#sexError').css("color", "red");
        errorShow("请输入性别。"); return false;


    } else {
        errorShow_clear();
        $("#sexError").html('');
        $("#sexError").hide();
    }
}

function checkNation(){
    var nation = document.getElementById('nation').value;
    if (nation == "" || nation.length < 1) {
        $("#nationError").html("&nbsp;请输入民族。");
        $("#nationError").show();
        $('#nationError').css("color", "red");

        errorShow("请输入民族。"); return false;

    } else {
        errorShow_clear();
        $("#nationError").html('');
        $("#nationError").hide();
    }
}


function checkMarrage() {

    var MarriageBox = document.getElementById('marriage').value;
    if (MarriageBox == "") {
        $("#marriageError").html('&nbsp;婚姻状况不能为空。');
        $("#marriageError").show();
        $('#marriageError').css("color", "red");
        errorShow("婚姻状况不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#marriageError").html('');
        $("#marriageError").hide();
    }
    return;
}

function checkProfession() {
    var ProfessionalBox = document.getElementById('profession').value;
    if (ProfessionalBox == "") {
        $("#professionError").html('&nbsp;职业不能为空。');
        $("#professionError").show();
        $('#professionError').css("color", "red");
        errorShow("职业不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#professionError").html('');
        $("#professionError").hide();
    }
    return;
}


function checkGoNational() {
    var GoNationalBox = document.getElementById('goNational').value;
    if (GoNationalBox == "") {
        $("#goNationalError").html('&nbsp;前往国家不能为空。');
        $("#goNationalError").show();
        $('#goNationalError').css("color", "red");
        errorShow("前往国家不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#goNationalError").html('');
        $("#goNationalError").hide();
    }
    
    var key = $("#goNational").attr("key");
    var lowful = verifyNational(key);
    if (lowful) {
        errorShow_clear();
        $("#goNationalError").html('');
        $("#goNationalError").hide();
    } else {
        $("#goNationalError").html('&nbsp;国籍填写错误，请重新填写。');
        $("#goNationalError").show();
        $('#goNationalError').css("color", "red");
        errorShow("国籍填写错误，请重新填写。"); return false;
      return;
    }
    return;
}



function checkPersonType() {
    var PersonTypeBox = document.getElementById('personType').value;
    if (PersonTypeBox == "") {
        $("#personTypeError").html('&nbsp;人员类型不能为空。');
        $("#personTypeError").show();
        $('#personTypeError').css("color", "red");
        errorShow("人员类型不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#personTypeError").html('');
        $("#personTypeError").hide();
    }
    return;
}


function checkContactPhone() {
    var ContactPhoneBox = document.getElementById('contactPhone').value;

    if (ContactPhoneBox == "") {
        $("#contactPhoneError").html('&nbsp;请输入有效的联系电话。');
        $("#contactPhoneError").show();
        $('#contactPhoneError').css("color", "red");
        errorShow("请输入有效的联系电话。"); return false;
    }
    else {
        errorShow_clear();
        $("#contactPhoneError").html('');
        $("#contactPhoneError").hide();
    }

    if (ContactPhoneBox.length != 11 && ContactPhoneBox.length != 12) {
        $("#contactPhoneError").html('&nbsp;请输入有效的联系电话。');
        $("#contactPhoneError").show();
        $('#contactPhoneError').css("color", "red");
        errorShow("请输入有效的联系电话。"); return false;
    }
    else {
        errorShow_clear();
        $("#contactPhoneError").html('');
        $("#contactPhoneError").hide();
    }


    var reg0 = /^([0-9])+$/;

    if (!reg0.test(ContactPhoneBox)) {
        $("#contactPhoneError").html('&nbsp;请输入有效的联系电话。');
        $("#contactPhoneError").show();
        $('#contactPhoneError').css("color", "red");
        errorShow("请输入有效的联系电话。"); return false;
    } else {
        errorShow_clear();
        $("#contactPhoneError").html('');
        $("#contactPhoneError").hide();
    }

    return true;
}


function checkAddress() {
    var AddressBox = document.getElementById('Address').value;
    if (AddressBox == "" || AddressBox.length < 1) {
        $("#AddressError").html('&nbsp;通讯地址不能为空。');
        $("#AddressError").show();
        $('#AddressError').css("color", "red");
        errorShow("通讯地址不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#AddressError").html('');
        $("#AddressError").hide();
    }
    if (!checkValidInput(AddressBox)) {
        $("#AddressError").html('&nbsp;请不要输入非法的字符。');
        $("#AddressError").show();
        $('#AddressError').css("color", "red");
        errorShow("通讯地址请不要输入非法的字符。"); return false;
    }

    else {
        errorShow_clear();
        $("#AddressError").html('');
        $("#AddressError").hide();
    }
    return;
}


function checkDuration_Time() {
    var Duration_TimeBox = document.getElementById('duration_Time').value;
    if (Duration_TimeBox == "") {
        $("#duration_TimeError").html('&nbsp;请输入有效的预计境外停留时间。');
        $("#duration_TimeError").show();
        $('#duration_TimeError').css("color", "red");
        errorShow("请输入有效的预计境外停留时间。"); return false;
    } else {
        errorShow_clear();
        $("#duration_TimeError").html('');
        $("#duration_TimeError").hide();
    }

    var phoneReg = /^[0-9]{1,11}$/;
    
    if (!phoneReg.test(Duration_TimeBox)) {
        $("#duration_TimeError").html('&nbsp;请输入有效的预计境外停留时间。');
        $("#duration_TimeError").show();
        $('#duration_TimeError').css("color", "red");
        errorShow("请输入有效的预计境外停留时间。"); return false;
    } else {
        errorShow_clear();
        $("#duration_TimeError").html('');
        $("#duration_TimeError").hide();
    }
    return true;
}


function checkDateOfLeave() {

    var DateOfLeaveBox = document.getElementById('dateOfLeave').value;

    if (DateOfLeaveBox == "" || DateOfLeaveBox.length != 10) {
        $("#dateOfLeaveError").html('&nbsp;离境时间输入有误。');
        $("#dateOfLeaveError").show();
        $('#dateOfLeaveError').css("color", "red");
        errorShow("离境时间输入有误。"); return false;
    }
    else {
        errorShow_clear();
        $("#dateOfLeaveError").html('');
        $("#dateOfLeaveError").hide();
    }

}

function errorShow(txt) {

    $('#spanMessage1').html('&nbsp;' + txt + ' 请检查后重新提交！');
    $('#spanMessage1').css("display", "");
    $('#spanMessage1').css("color", "red");
}

function errorShow_clear() {

    $('#spanMessage').html('');
    $('#spanMessage').css("display", "none");
    $('#spanMessage').css("color", "red");

    $('#spanMessage1').html('');
    $('#spanMessage1').css("display", "none");
    $('#spanMessage1').css("color", "red");
}

function SetVal() {
    //姓名转化为拼音
    var nameBox = document.getElementById('name').value;
	if("" == nameBox){
		return;
	}
    var namePinYin = pinyin.getFullChars(nameBox);
    $("#namePinYin").val(namePinYin);
//	var nameIsChinese = Bee.StringUtils.isChinese(nameBox);
//	if(nameIsChinese && document.getElementById('namePinYin').value == ""){
//		var namePinYin = pinyin.getFullChars(nameBox);
//		$("#namePinYin").val(namePinYin);
//	}
}

function CheckForms() {
    //国籍
    var NationalBox = document.getElementById('national').value;
    if (NationalBox == "") {
        $("#nationalError").html('&nbsp;国籍不能为空。');
        $("#nationalError").show();
        $('#nationalError').css("color", "red");
        errorShow("国籍不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#nationalError").html('');
        $("#nationalError").hide();
    }
    
    var key = $("#national").attr("key");
    var lowful = verifyNational(key);
    if (lowful) {
        errorShow_clear();
        $("#nationalError").html('');
        $("#nationalError").hide();
    } else {
        $("#nationalError").html('&nbsp;国籍填写错误，请重新填写。');
        $("#nationalError").show();
        $('#nationalError').css("color", "red");
        errorShow("国籍填写错误，请重新填写。"); return false;
    }
    //预约地点
    var AppointSite = document.getElementById('appointSite').value;
    if (AppointSite == "") {
        $("#appointSiteError").html('&nbsp;体检场所不能为空。');
        $("#appointSiteError").show();
        $('#appointSiteError').css("color", "red");
        errorShow("体检场所不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#appointSiteError").html('');
        $("#appointSiteError").hide();
    }
    //姓名
    var reg0 = /^([A-Za-z\u4E00-\u9FA5\s]{1,30})+$/;
    var userSureNameBox = document.getElementById('name').value;
    if (userSureNameBox == "" || userSureNameBox.length < 1) {
        $("#nameError").html('&nbsp;您的姓名不能为空，只能由1到30位字母或汉字组成。');
        $("#nameError").show();
        $('#nameError').css("color", "red");
        errorShow("您的姓名不能为空，只能由1到30位字母或汉字组成。"); return false;
    } else {
        errorShow_clear();
        $("#nameError").html('');
        $("#nameError").hide();
    }

    if (!reg0.test(userSureNameBox)) {

        $("#nameError").html('&nbsp;您的姓名只能由1到30位字母或汉字组成。');
        $("#nameError").show();
        $('#nameError').css("color", "red");
        errorShow("您的姓名只能由1到30位字母或汉字组成。"); return false;
    } else {
        errorShow_clear();
        $("#nameError").html('');
        $("#nameError").hide();
    }


    if (!checkValidInput(userSureNameBox)) {
        $("#nameError").html('&nbsp;请不要输入非法的字符。');
        $("#nameError").show();
        $('#nameError').css("color", "red");
        errorShow("您的姓名请不要输入非法的字符。"); return false;
    }
    else {
        errorShow_clear();
        $("#nameError").html('');
        $("#nameError").hide();
    }
    //姓名拼音
    var reg0 = /^([A-Za-z\s]{1,30})+$/;
    var userSureNamePinYinBox = document.getElementById('namePinYin').value;
    if (userSureNamePinYinBox == "" || userSureNamePinYinBox.length < 1) {

        $("#namePinYinError").html('&nbsp;您的姓名拼音不能为空，只能由1到30位字母组成。');
        $("#namePinYinError").show();
        $('#namePinYinError').css("color", "red");
        errorShow("您的姓名拼音不能为空，只能由1到30位字母组成。"); return false;
    } else {
        errorShow_clear();
        $("#namePinYinError").html('');
        $("#namePinYinError").hide();

    }

    if (!reg0.test(userSureNamePinYinBox)) {

        $("#namePinYinError").html('&nbsp;您的姓名拼音只能由1到30位字母组成。');
        $("#namePinYinError").show();
        $('#namePinYinError').css("color", "red");
        errorShow("您的姓名拼音只能由1到30位字母组成。"); return false;
    } else {
        errorShow_clear();
        $("#namePinYinError").html('');
        $("#namePinYinError").hide();
    }

    if (!checkValidInput(userSureNamePinYinBox)) {
        $("#namePinYinError").html('&nbsp;请不要输入非法的字符。');
        $("#namePinYinError").show();
        $('#namePinYinError').css("color", "red");
        errorShow("您的姓名拼音请不要输入非法的字符。"); return false;
    }

    else {
        errorShow_clear();
        $("#namePinYinError").html('');
        $("#namePinYinError").hide();
    }
    //证件类型
    var IDTypeBox = document.getElementById('IDType').value;
    if (IDTypeBox == "" || IDTypeBox.length < 1) {
        $("#IDTypeError").html("&nbsp;请输入证件类型。");
        $("#IDTypeError").show();
        $('#IDTypeError').css("color", "red");

        errorShow("证件类型输入有误。"); return false;

    } else {
        errorShow_clear();
        $("#IDTypeError").html('');
        $("#IDTypeError").hide();
    }
    //证件号码
    var IDType = $("#IDType").find("option:selected").text();

    //身份证判断
    if (IDType.indexOf("身份证") >= 0) {
        
        if (!isCorrectCardNumber($("#IDNumber").val())) {
            
            $("#IDNumberError").html('&nbsp;身份证格式有误！');
            $("#IDNumberError").show();
            $('#IDNumberError').css("color", "red");
            errorShow("身份证格式有误。"); return false;
        } else {
            $("#IDNumberError").html('');
            $("#IDNumberError").hide();
            errorShow_clear();
        }

    } else {

        var IDNumberBox1 = document.getElementById('IDNumber').value;

        if (IDNumberBox1 == "" || IDNumberBox1.length < 2) {
            $("#IDNumberError").html("&nbsp;请输入证件号码");
            $("#IDNumberError").show();
            $('#IDNumberError').css("color", "red");
            errorShow("请输入证件号码。"); return false;
        }
        else {
            $("#IDNumberError").html('');
            $("#IDNumberError").hide();
            errorShow_clear();
        }

    }
    //出生日期
    var DateOfBirthBox = document.getElementById('dateOfBirth').value;

    if (DateOfBirthBox == "" || DateOfBirthBox.length != 10) {
        $("#dateOfBirthError").html('&nbsp;出生日期输入有误。');
        $("#dateOfBirthError").show();
        $('#dateOfBirthError').css("color", "red");
        errorShow("出生日期输入有误"); return false;
    }
    else {

        var myDate = new Date();
        var st = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate() + " 23:59:59";
        var et = DateOfBirthBox + " 0:0:0";;
        var stdt = new Date(st.replace("-", "/"));
        var etdt = new Date(et.replace("-", "/"));

        if (stdt < etdt) {

            $("#dateOfBirthError").html('&nbsp;出生日期输入时间有误。');
            $("#dateOfBirthError").show();
            $('#dateOfBirthError').css("color", "red");
            errorShow("出生日期输入时间有误。"); return false;

        } else {
            errorShow_clear();
            $("#dateOfBirthError").html('');
            $("#dateOfBirthError").hide();
        }
        
    }

    var a = /^(\d{4})-(\d{2})-(\d{2})$/
    if (!a.test(DateOfBirthBox)) {
        $("#dateOfBirthError").html('&nbsp;出生日期输入有误。');
        $("#dateOfBirthError").show();
        $('#dateOfBirthError').css("color", "red");
        errorShow("出生日期输入有误。"); return false;

    }
    else {
        errorShow_clear();
        $("#dateOfBirthError").html('');
        $("#dateOfBirthError").hide();
    }
    //年龄
    var ageBox = document.getElementById('age').value;
    if (ageBox < 0) {
        $("#ageError").html('&nbsp;年龄输入有误。');
        $("#ageError").show();
        $('#ageError').css("color", "red");
        errorShow("年龄输入有误。"); return false;

    }
    else {
        errorShow_clear();
        $("#ageError").html('');
        $("#ageError").hide();
    }
    
    //性别
    var sex = document.getElementById('sex').value;
    if (sex == "" || sex.length < 1) {
        $("#sexError").html("&nbsp;请输入性别。");
        $("#sexError").show();
        $('#sexError').css("color", "red");
        errorShow("请输入性别。"); return false;
    } else {
        errorShow_clear();
        $("#sexError").html('');
        $("#sexError").hide();
    }
    //民族
    var nation = document.getElementById('nation').value;
    if (nation == "" || nation.length < 1) {
        $("#nationError").html("&nbsp;请输入民族。");
        $("#nationError").show();
        $('#nationError').css("color", "red");

        errorShow("请输入民族。"); return false;

    } else {
        errorShow_clear();
        $("#nationError").html('');
        $("#nationError").hide();
    }
    //职业
    var ProfessionalBox = document.getElementById('profession').value;
    if (ProfessionalBox == "") {
        $("#professionError").html('&nbsp;职业不能为空。');
        $("#professionError").show();
        $('#professionError').css("color", "red");
        errorShow("职业不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#professionError").html('');
        $("#professionError").hide();
    }
    //前往国家
    var GoNationalBox = document.getElementById('goNational').value;
    if (GoNationalBox == "") {
        $("#goNationalError").html('&nbsp;前往国家不能为空。');
        $("#goNationalError").show();
        $('#goNationalError').css("color", "red");
        errorShow("前往国家不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#goNationalError").html('');
        $("#goNationalError").hide();
    }
    
    var key = $("#goNational").attr("key");
    var lowful = verifyNational(key);
    if (lowful) {
        errorShow_clear();
        $("#goNationalError").html('');
        $("#goNationalError").hide();
    } else {
        $("#goNationalError").html('&nbsp;前往国家填写错误，请重新填写。');
        $("#goNationalError").show();
        $('#goNationalError').css("color", "red");
        errorShow("前往国家填写错误，请重新填写。"); return false;
    }
    //人员类型
    var PersonTypeBox = document.getElementById('personType').value;
    if (PersonTypeBox == "") {
        $("#personTypeError").html('&nbsp;人员类型不能为空。');
        $("#personTypeError").show();
        $('#personTypeError').css("color", "red");
        errorShow("人员类型不能为空。"); return false;
    }
    else {
        errorShow_clear();
        $("#personTypeError").html('');
        $("#personTypeError").hide();
    }
    //联系电话
    var ContactPhoneBox = document.getElementById('contactPhone').value;

    if (ContactPhoneBox == "") {
        $("#contactPhoneError").html('&nbsp;请输入有效的联系电话。');
        $("#contactPhoneError").show();
        $('#contactPhoneError').css("color", "red");
        errorShow("请输入有效的联系电话。"); return false;
    }
    else {
        errorShow_clear();
        $("#contactPhoneError").html('');
        $("#contactPhoneError").hide();
    }

    if (ContactPhoneBox.length != 11 && ContactPhoneBox.length != 12) {
        $("#contactPhoneError").html('&nbsp;请输入有效的联系电话。');
        $("#contactPhoneError").show();
        $('#contactPhoneError').css("color", "red");
        errorShow("请输入有效的联系电话。"); return false;
    }
    else {
        errorShow_clear();
        $("#contactPhoneError").html('');
        $("#contactPhoneError").hide();
    }


    var reg0 = /^([0-9])+$/;

    if (!reg0.test(ContactPhoneBox)) {
        $("#contactPhoneError").html('&nbsp;请输入有效的联系电话。');
        $("#contactPhoneError").show();
        $('#contactPhoneError').css("color", "red");
        errorShow("请输入有效的联系电话。"); return false;
    } else {
        errorShow_clear();
        $("#contactPhoneError").html('');
        $("#contactPhoneError").hide();
    }
    //预计境外停留时间
    var Duration_TimeBox = document.getElementById('duration_Time').value;
    if (Duration_TimeBox == "") {
        $("#duration_TimeError").html('&nbsp;请输入有效的预计境外停留时间。');
        $("#duration_TimeError").show();
        $('#duration_TimeError').css("color", "red");
        errorShow("请输入有效的预计境外停留时间。"); return false;
    } else {
        errorShow_clear();
        $("#duration_TimeError").html('');
        $("#duration_TimeError").hide();
    }

    var phoneReg = /^[0-9]{1,11}$/;
    
    if (!phoneReg.test(Duration_TimeBox)) {
        $("#duration_TimeError").html('&nbsp;请输入有效的预计境外停留时间。');
        $("#duration_TimeError").show();
        $('#duration_TimeError').css("color", "red");
        errorShow("请输入有效的预计境外停留时间。"); return false;
    } else {
        errorShow_clear();
        $("#duration_TimeError").html('');
        $("#duration_TimeError").hide();
    }
    //离境时间
    var DateOfLeaveBox = document.getElementById('dateOfLeave').value;

    if (DateOfLeaveBox == "" || DateOfLeaveBox.length != 10) {
        $("#dateOfLeaveError").html('&nbsp;离境时间输入有误。');
        $("#dateOfLeaveError").show();
        $('#dateOfLeaveError').css("color", "red");
        errorShow("离境时间输入有误。"); return false;
    }
    else {
        errorShow_clear();
        $("#dateOfLeaveError").html('');
        $("#dateOfLeaveError").hide();
    }
    return true;
}


function SetChoiceNum(obj) {
    
    var obj_value = obj.value.replace(":有", "").replace(":无", "");
    if (document.getElementById('inputJerenshi_jiaoyang').value.indexOf(obj_value) < 0) {
        document.getElementById('inputJerenshi_jiaoyang').value = document.getElementById('inputJerenshi_jiaoyang').value + obj_value;
        document.getElementById('inputJerenshi1').value = parseInt(document.getElementById('inputJerenshi1').value) + 1;
    }
    

    //this. = 
    //this.inputJerenshi_jiaoyang.v

}

