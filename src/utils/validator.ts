export default {
  validatePhone(phone: string) {
    const reg = /^[1][3-9][0-9]{9}$/;
    return reg.test(phone);
  },
};
