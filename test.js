/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, @oawu/xterm
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const Scss = require('./index.js')
const FileSystem = require('fs')

Scss.file('test/test.scss', (error, result) => {
  if (error) {
    console.error(error.message);
    console.error('info：' + error.info);
    // console.error('lines：' + error.lines);
    console.error('line：' + error.line);
    console.error('column：' + error.column);
    return
  }
  
  console.error(result.stats.duration);

  FileSystem.writeFile("test/test.css", result.css.toString(), 'utf8', error => {
    console.error('ok');
  })
})
