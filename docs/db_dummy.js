db.usuarios.insert({userName: 'greg593', mail: 'vmorales@bytesw.com'})

db.usuarios.insert([
	{userName: 'ceco124', mail: 'ccubur@bytesw.com'},
	{userName: 'meme657', mail: 'mlezana@bytesw.com'}
]);

db.usuarios.find({userName: 'meme657'})

db.usuarios.update(
	{userName: 'meme657'},
	{
		userName: 'meme567'	,
		mail: 'mlezana@bytesw.com'
	}
);




Colecciones:
	equipos
	grupos
	usuarios


db.createCollection("usuarios",
	{
		validator: {$and:
			[
				{nombre: {$type: "string"}},
				{mail: {$regex: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/}}
			]
		}
	}
)



db.createCollection("equipos",
	{
		validator: {$and:
			[
				{nombre: {$type: "string"}},
				{jj: {$type: "int"}},
				{jg: {$type: "int"}},
				{je: {$type: "int"}},
				{jp: {$type: "int"}},
				{gf: {$type: "int"}},
				{gc: {$type: "int"}},
				{gd: {$type: "int"}},
				{pts: {$type: "int"}}
			]
		}
	}
)

db.createCollection("grupos",
	{
		validator: {$and:
			[

			]
		}
	}
)