function contact(){
    var contactdata={
        Mobile:"7007375625",
        Gmail:"sanand8660@gmail.com",
        LinkedIn:"https://www.linkedin.com/in/shubhamanand96",
        Github:"https://github.com/Sanand52",
    }


    document.write(`
        <h2 class="text-center">Contact</h2>
            <p class="text-center">Noida, India 201301</p>
            <p class="text-center">Mobile: ${contactdata.Mobile}</p>
            <p class="text-center">Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${contactdata.Gmail}">${contactdata.Gmail}</a></p>
            <p class="text-center">
                <a href="${contactdata.LinkedIn}" target="_blank" class="btn btn-primary">LinkedIn</a>
                <a href="${contactdata.Github}" target="_blank" class="btn btn-dark">GitHub</a>
            </p>
        `)}


contact()

