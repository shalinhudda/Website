$(document).ready(function() {

  addSkillList();
  addListeners();
  checkScreemWidth();

  function checkScreemWidth(){
    if($(document).width() <= 750){
      setRelativeHeading(false);
    }
    else{
      setRelativeHeading(true);
    }
  }
  
  function addSkillList(){
    for (var _i = 0; _i < resume_skills.length; _i++) {
      var skillName = resume_skills[_i].SkillName;
      var skillValue = resume_skills[_i].SkillRating;
  
      var codeToAdd = '<h4 class="sub-heading">' + skillName + '</h4>' +
                      '<div class="br-wrapper br-theme-bars-reversed">' +
                          '<div class="br-widget br-readonly">';
  
      for(var _j = 0.5; _j <= 5; _j = _j + 0.5){
        if(skillValue < _j){
          codeToAdd = codeToAdd + '<a data-rating-value= "' + _j + '" data-rating-text="" class="br-fractional br-fractional-50"></a>';
        }
        else{
          codeToAdd = codeToAdd + '<a data-rating-value= "' + _j + '" data-rating-text="" class="br-selected br-fractional br-fractional-50"></a>';
        }
      }
  
      codeToAdd = codeToAdd + '</div>' + '</div>';
  
      $(".resume-skill-list").last().append('<li>'+ codeToAdd + '</li>');
  
    }
  }

  function setRelativeHeading(enable){
    if(enable){
      $(".contact-information-heading").height($(".contact-information-row").height());
      $(".education-heading").height($(".education-row").height());
      $(".work-experience-heading").height($(".work-experience-row").height());
      $(".certificates-online-courses-heading").height($(".certificates-online-courses-row").height());
      $(".technical-skills-heading").height($(".technical-skills-row").height());
      $(".interests-heading").height($(".interests-row").height());
    }
    else{
      $(".contact-information-heading").height('auto');
      $(".education-heading").height('auto');
      $(".work-experience-heading").height('auto');
      $(".certificates-online-courses-heading").height('auto');
      $(".technical-skills-heading").height('auto');
      $(".interests-heading").height('auto');
    }
  }

  function addListeners() {
    window.addEventListener('resize', checkScreemWidth);
  }

});