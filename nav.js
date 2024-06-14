

function navbar(navdata){
    document.write(`<section style="background: #f1c40f; color: rgba(0, 0, 0, 0.5);"><nav class="shift navbar navbar-expand-lg navbar-dark bg-info">
    <a class="navbar-brand" href="#">Shubham Anand</a><button onclick="downloadFile()" class="btn btn-info bg-dark">Download Resume</button>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
        `)
        for(let n of navdata)
            {
                document.write(`
        <li class="nav-item"><a class="nav-link" href="#${n}">${n}</a></li>`)
            }
            document.write(`
                </ul>
    </div>
</nav>
</section>
                `)
}
navbar (["education","projects","certifications","skills","languages","interests","contact"])