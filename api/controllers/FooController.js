module.exports = {
  index: (req, res) => {
    return res.view('pages/foo', {
      data: 'Lorem ipsum en dolo',
      foo: 'bar'
    });
  }
};
