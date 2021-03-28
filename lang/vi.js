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

module.exports = {
    transUserLoginRegister: transUserLoginRegister,
    Registermailer: Registermailer
}