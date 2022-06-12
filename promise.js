const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasil) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    const result = theaterIXX.concat(theaterVGC);
    return result.filter((el) => el.hasil === hasil).length;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  promiseOutput,
};
