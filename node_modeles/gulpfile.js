function scripts() {
    return src([
        'node_modeles/jquery/dist/jquery.js',
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
    .pipe(uglify())
}