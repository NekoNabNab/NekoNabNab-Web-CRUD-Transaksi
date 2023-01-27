import { db } from "../database.js";


export const shopChartController = (req, res) => {
	db.query('select * from items', (err, items) => {
		if (err) console.error(err);

		db.query('select * from pembukuan order by create_time desc limit 5', (err, pembukuan) => {
			if (err) console.error(err);
			res.render("home", {
				pembukuan: pembukuan || [],
				items: items || []
			})
		})
	})
}

export const transaksiController = (req, res) => {
	const data = req.body;

	db.query('insert into pembukuan (pembeli, type, item_id, amount) values (?, ?, ?, ?)', [data.pembeli, data.type, data.item_id, data.amount], (err, result) => {
		if (err) {
			console.error(err);
			res.redirect('/home');
			return;
		}

		const qty = data.type === 'dibeli' ? data.amount * -1 : data.amount;
		db.query('update items set qty = qty + ? where id = ?', [qty, data.item_id], (err, result) => {
			if (err) console.error(err);
			res.redirect('/home');
		});
	})
}


