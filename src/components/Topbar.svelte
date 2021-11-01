<div class={'w-full flex justify-between p-1 backdrop-blur-lg'}>
    <div class={''}>
        <button>
            <img class={'w-6'} src="./assets/main-icon.svg" alt="OS logo"/>
        </button>
    </div>

    <div>
        <span class={'mr-4'}>{date}</span>
        <button class={'mr-3'}><i class="fas fa-wifi"></i></button>
        <button><i class="fas fa-volume-up"></i></button>
    </div>
</div>

<script>
import Date from '../utilities/Date'

let date = new Date().getDate()


setInterval(() => {
    date = new Date().getDate()
}, 1000);


</script>