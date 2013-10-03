
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('principal/index', { title: 'WebCandy' });
};