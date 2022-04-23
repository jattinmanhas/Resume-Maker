let button = document.querySelector('.dynamic-button');
let content = document.querySelector('#dynamic');




button.addEventListener('click', function update(){
  content.innerHTML=`
  <div class="row">
  <div class=" col-lg-6 col-md-6 col-sm-12">

  <h1 class="action-heading" > What is a resume? </h1>
  <p class="action-p dynamic-p p-main ">A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history. </p>
  <p class="action-p dynamic-p"> Your work history</p>
  <p class="action-p dynamic-p">Educational History </p>
  <p class="action-p dynamic-p">Achievements </p>
  <p class="action-p dynamic-p"> Projects done</p>
  <p class="action-p dynamic-p"> Resume Summary</p>
  </div>
<div class=" col-lg-6 col-md-6 col-sm-12">
<img src="images/dynamic-image.png" alt="dynamic image here" style="width : auto; height:auto; max-height:449px; border-radius:3rem;">
</div>

</div>
  `;
}
);