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