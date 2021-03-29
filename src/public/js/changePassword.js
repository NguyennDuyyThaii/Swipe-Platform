let userUpdatePassword = {}

function updateUserInfo() {
    $("#old_password").bind("change", function() {
        let old_password = $(this).val();
        let regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/);
        if (!regexPassword.test(old_password)) {
            alertify.notify("Mật khẩu phải có 8 kí tự, bao gồm chữ hoa chứ thường, kí tự đặc biệt và số!", "error", 7);
            $(this).val(null);
            delete userUpdatePassword.old_password;
            return false;
        }
        userUpdatePassword.old_password = old_password;
    })
    $("#new_password").bind("change", function() {
        let new_password = $(this).val();
        let regexNewPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/);
        if (!regexNewPassword.test(new_password)) {
            alertify.notify("Mật khẩu phải có 8 kí tự, bao gồm chữ hoa chứ thường, kí tự đặc biệt và số!", "error", 7);
            $(this).val(null);
            delete userUpdatePassword.new_password;
            return false;
        }
        userUpdatePassword.new_password = new_password;
    })
    $("#re_new_password").bind("change", function() {
        let re_new_password = $(this).val();
        if (!userUpdatePassword.new_password) {
            alertify.notify("Bạn chưa nhập mật khẩu mới, hãy nhập trước khi làm bước này!", "error", 7);
            $(this).val(null);
            delete userUpdatePassword.re_new_password;
            return false;
        }
        if (re_new_password !== userUpdatePassword.new_password) {
            alertify.notify("Nhập lại mật khẩu chưa chính xác, kiểm tra lại!", "error", 7)
            $(this).val(null)
            delete userUpdatePassword.re_new_password
            return false
        }
        userUpdatePassword.re_new_password = re_new_password;
    })
}

function changePassword() {
    $.ajax({
        url: '/user/update-password',
        type: 'put',
        data: userUpdatePassword,
        success: function(data) {
            alertify.notify(data.message, "success", 7)
        },
        error: function(error) {
            alertify.notify(error.responseText, "error", 7)
        }
    })
}
$(document).ready(function() {
    updateUserInfo()
    $("#change-password").bind("click", function() {
        if (!userUpdatePassword.new_password || !userUpdatePassword.old_password || !userUpdatePassword.re_new_password) {
            alertify.notify("Bạn phải thay đổi tất cả thông tin trước khi cập nhập!", "error", 7)
            return false;
        }
        changePassword()
    })
})