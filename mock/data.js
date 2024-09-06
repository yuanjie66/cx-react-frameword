const Mock = require('mockjs');
const Router = require('koa-router');

Mock.Random.extend({
	hash() {
		// 生成一个随机的32字符的hash值
		return Mock.mock('@guid').replace(/-/g, '');
	}
});

let data = new Router
const sleepFn = (ms) => new Promise(resolve => setTimeout(resolve, ms))

data.get('/data', async ctx => {
	const data = Mock.mock({
		'array|25': [
			{
				'row': '@hash',
				'nickname|+1': '@cname',
				'content': '@cparagraph',
				'id|+1': 1,
				'company_name|20-40': /[a-zA-Z0-9]/,
				'description|10-20': '@cword',
				'url': 'https://www.baidu.com',
				'updated_at': '@datetime("yyyy-MM-dd HH:mm:ss")',
				"address|1-10": [{
					'city': '@city',
					'street': '@street',
				}]
			}
		]
	});
	await sleepFn(500)
	ctx.body = data.array
});


data.get('/data/:id', async ctx => {
	const data = Mock.mock({
		'row': '@hash',
		'nickname|+1': '@cname',
		'content': '@cparagraph',
		'id|+1': 1,
		'company_name|20-40': /[a-zA-Z0-9]/,
		'description|10-20': '@cword',
		'url': 'https://www.baidu.com',
		'updated_at': '@datetime("yyyy-MM-dd HH:mm:ss")',
		"address|1-10": [{
			'city': '@city',
			'street': '@street',
		}]
	});
	await sleepFn(500)
	ctx.body = data
});


module.exports = data;
