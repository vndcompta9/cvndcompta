<script src="./js/jquery-3.3.1.min.js">
</script>
 jQuery(() => {
    jQuery('select').on('change', (e) => {
        const value = e.target.value;
        const subscribeBtn = $('form button');

        if (value !== '') {
            subscribeBtn.attr('disabled', false);
        } else {
            subscribeBtn.attr('disabled', true);
        }
    })
});
</script>