import { db } from "../database.js";

export const indexController = (req, res) => {
	db.query('select * from items', (err, items) => {
		if (err) console.error(err);

		db.query('select * from pembukuan order by create_time desc limit 5', (err, pembukuan) => {
			if (err) console.error(err);
			res.render("gudangAdmin", {
				pembukuan: pembukuan || [],
				items: items || []
			})
		})
	})
}

export const tambahController = (req, res) => {
	const data = req.body;
	
	db.query('insert into items (name, harga, gambar) values (?,?,?)', [data.name, data.harga, data.gambar], (err, result) => {
		if (err) console.error(err);
		res.redirect('/gudangAdmin');
	})
}

export const tarikController = (req, res) => {
	const data = req.body;

	db.query('insert into pembukuan (pembeli, type, item_id, amount) values (?, ?, ?, ?)', [data.pembeli, data.type, data.item_id, data.amount], (err, result) => {
		if (err) {
			console.error(err);
			res.redirect('/gudangAdmin');
			return;
		}

		const qty = data.type === 'ditarik' ? data.amount * -1 : data.amount;
		db.query('update items set qty = qty + ? where id = ?', [qty, data.item_id], (err, result) => {
			if (err) console.error(err);
			res.redirect('/gudangAdmin');
		});
	})
}

export const updateItemController = (req,res)=>{

    const id = req.params.id;

    db.query(`update items set status = "ready" where id = ${id}`)
    
    res.redirect('/gudangAdmin')
}

// export const editItemController = (req,res)=>{
//     const id = req.params.id
//     return db.query(`select * from items where id =${id}`, (err,result)=>{
//         if(err) throw err
//         return res.render('gudangAdmin',{items : result[0]})
//     })
// }

// export const edittItemController = (req,res)=>{

//     const id = req.params.id;
//     const data = req.body;
//     console.log(data)

//     db.query(`update items set name = "${data.name}" , harga = "${data.harga}", gambar = "${data.gambar}" where id = ${id}`)
    
//     res.redirect('/gudangAdmin')
// }

// export const deleteItemController = (req,res)=>{

//     const id = req.params.id;

//     db.query(`delete from items where id= ${id}`)
    
//     res.redirect('/gudangAdmin')
// }


