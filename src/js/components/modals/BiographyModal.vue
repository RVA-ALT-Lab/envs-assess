<template>
<div>
	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#bio-modal">
                See Bio Snapshot
  </button>
  <div class="modal" id="bio-modal" tabindex="-1" role="dialog" aria-labelledby="bioModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-slideout" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="bioModalLabel">{{student.name}}</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">X</span>
          </button>

        </div>
        <div class="modal-body">
          <img id="stu-photo" :src="student.pic" alt="Student biography image.">
          <div id="stu-grad">{{student.grad}}</div>
          <div id="stu-majors">{{student.major}}</div>
          <div id="stu-minors">{{student.minor}}</div>
          <h3>General Portfolio Data</h3>
          <div id="stu-page-count">{{student.postCount}}</div>
          <div id="stu-post-count">{{student.pageCount}}</div>
          <div id="stu-created">{{student.created}}</div>
          <div id="stu-last-update">{{student.lastUpdate}}</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BiographyModal',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'student'
    ])
  },
  methods: {
  }
}
</script>