new Vue({
    el: '#app',
    data: {
        newJob: '',
        myJobs: [
            'to do 1',
            'to do 2',
            'to do 3',
        ],
        todoDoneRow: document.getElementsByClassName('job-row')
    },
    methods: {
        addToList: function () {
            if (this.newJob == '') {
                alert('job is emtpy');
            } else {
                this.myJobs.push(this.newJob);
            }
        },
        toDoDone: function (index) {
            // this.myJobs.splice(index,1);
            this.todoDoneRow[index].classList.add("active");
        },
        repeat: function (index) {
            this.todoDoneRow[index].classList.remove("active");
        },
        deleteJob: function (index) {
            this.myJobs.splice(index, 1);
        }
    }
})