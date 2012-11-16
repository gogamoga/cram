define(['when', 'cram/lib/ctx'], function (when, getCtx) {

	function link (ids, io, config) {

		// for each id, load its meta data and write its text

		return when.reduce(ids, function (results, id) {
			return when(getCtx(id, config), function (ctx) {
				return io.readMeta(ctx).then(function (text) {
					var meta = JSON.parse(text);
					return when(io.writeModule(ctx, meta.text), function () {
						results.push(id);
						return results;
					});
				});
			});

		}, []);

	}

	return link;

});