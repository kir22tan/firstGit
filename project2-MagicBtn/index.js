let btn = document.querySelector('button');
btn.addEventListener('click', function() {
        for (let i = 1; i < 6; i++) {
            let val = Math.floor(Math.random() * 10)
            document.getElementById(`c${i}`).style.order = val;
        }

        let no = (Math.floor(Math.random() * 5)) + 1
            // console.log(no);
            // document.getElementsByClassName('colorful').style.backgroundColor = 'rgb(43,43,43)';
        for (let i = 1; i <= no; i++) {
            // console.log(i);
            let selected = document.getElementById(`c${i}`);
            selected.classList.toggle(`colorful${i}`);
            // selected.classList.toggle('colorful2');
        }


    }



)