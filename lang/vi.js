let transUserLoginRegister = {
    email_empty: "Email không được để trống!",
    email_incorect: "Email phải có định dạng @gmail.com!",
    password_empty: "Password không được để trống!",
    password_incorect: "Password phải bao gồm ít nhất 8 kí tự, bao gồm chữ hoa, chữ thường, số và kí tự đặc biệt!",
    re_password_incorect: "Re_Password không giống mật khẩu bạn nhập ở trên, hãy kiểm tra lại!",
    gender_incorect: "Giới tính chưa được tích, hãy kiểm tra lại!",
    email_in_use: "Tài khoản email này đã tồn tại, hãy kiểm tra lại!",
    account_removed: "Email dùng để tạo tài khoản đỡ bị gỡ khoải hệ thống vĩnh viễn, hãy cảm thông!",
    account_not_active: "Tài khoản đã được tạo nhưng chưa được Active, hãy vào email của bạn để xác nhận!",
    userCreated: (useremail) => {
        return `Tài khoản <strong>${useremail}</strong> đã đăng kí nhưng chưa kích hoạt, hãy kiểm tra Email bạn đã đăng kí  `
    }
}
let Registermailer = {
    subject: "NguyenDuyThai: Xác nhận thông tin tài khoản của bạn !",
    template: (linkVerify) => {
        return `
            <h2>Bạn nhận được Email này vì muốn đăng kí tài khoản với hệ thống của chúng tôi.</h2>
            <h3>Vui lòng Click vào liên kết bên dưới để kích hoạt tài khoản:</h3>
            <h3><a href="${linkVerify}" target="blank" >${linkVerify}</a></h3>
            <h1>Xin chân thành cảm ơn!</h1>
        `
    },
    send_faild: "Có lối trong quá trình gửi email, vui lòng xem lại tất cả các thông tin!",
    account_actived: "Kích hoạt tài khoản thành công, Bạn có thể đăng nhập",
    logout_success: "Đăng xuất tài khoản thành công!"
}
let transPassport = {
    server_error: "Có lỗi ở phía Server, Vui lòng đăng nhập hoặc trở lại sau, cảm ơn.",
    login_failed: "Tài khoản hoặc mật khẩu không chính xác, hãy kiểm tra lại!",
    account_not_active: "Tài khoản này đã được đăng kí nhưng chưa được ACTIVE, kiểm tra email của bạn",
    login_success: (username) => {
        return `Xin chào <strong>${username}</strong>, Chúc bạn một ngày tốt lành!`
    },
    logout_success: "Đăng xuất tài khoản thành công, hẹn gặp lại!"
}

let transUpdateUser = {
    user_password: "Chúc mừng bạn cập nhập mật khẩu thành công",
    account_undefined: "Oop, Tài khoản không tồn tại, có lỗi đăng nhập rồi!",
    old_password_failed: "Mật khẩu hiện tại không chính xác, hãy kiểm tra lại!",
    old_password: "Mật khẩu phải có ít nhất 8 kí tự, bao gồm chữ hoa, chữ thường!",
    re_new_password: "Nhập lại mật khẩu mới chưa chính xác, bạn hãy nhập lại"
}
module.exports = {
    transUserLoginRegister: transUserLoginRegister,
    Registermailer: Registermailer,
    transPassport: transPassport,
    transUpdateUser: transUpdateUser
}