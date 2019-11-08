<template>
<div>
	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#bio-modal">
                See Bio Snapshot
  </button>
  <div class="modal fade" id="bio-modal" tabindex="-1" role="dialog" aria-labelledby="bioModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-slideout" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="bioModalLabel">Student Name</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>

      </div>
      <div class="modal-body">
      	<img id="stu-photo" src="" alt="Student biography image.">
      	<div id="stu-grad"></div>
        <div id="stu-majors"></div>
        <div id="stu-minors"></div>
        <h3>General Portfolio Data</h3>
        <div id="stu-page-count"></div>
        <div id="stu-post-count"></div>
        <div id="stu-created"></div>
        <div id="stu-last-update"></div>
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
export default {
  name: 'BiographyModal',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>