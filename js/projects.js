(function() {
    for (var _i = 0; _i < project_list.length; _i++) {
        var project_name = project_list[_i].ProjectName;
        var project_description = project_list[_i].ProjectDescription;
        var project_image = project_list[_i].ProjectImage;
        var project_skills = project_list[_i].ProjectSkillsLearned;
        var project_image_or_video = project_list[_i].ImageOrVideo;
        var project_date = project_list[_i].ProjectDate;
    
        var project_even_list = 
        '<div class="row featurette">' +
          '<div class="col-md-5" style=" float: left;">' +
            '<img src =' + project_image + ' class="responsive-image">' +
          '</div>' +
          '<div class="col-md-7">' + 
            '<h2 style="margin-bottom:5px;" class="featurette-heading">' + project_name  + '</h2>'+
            '<h3 style="color:burlywood; font-style: italic; font-size: 15px;">' + project_date + '</h3>' +
            '<p class="lead">' + project_description.join(" ") + '</p>' +
            '<h2 class="skill-heading"> Project Components </h2>' +
            '<div class="skill-box">' +
                '<ul class="skill-list">' + 
                '</ul>' + 
            '</div>'+
          '</div>' +
        '</div>' +
        '<hr class="featurette-divider">';
        
        var project_odd_list = 
        '<div class="row featurette">' +
          '<div class="col-md-5 order-md-3">' +
            '<img src =' + project_image + ' class="responsive-image">' +
          '</div>' +
          '<div class="col-md-7 order-md-1">' + 
            '<h2 style="margin-bottom:5px;" class="featurette-heading">' + project_name + '</h2>' +
            '<h3 style="color:burlywood; font-style: italic; font-size: 15px;">' + project_date + '</h3>' +
            '<p class="lead">' + project_description.join(" ") + '</p>' +
            '<h2 class="skill-heading"> Project components</h2>' +
            '<div class="skill-box">' +
                '<ul class="skill-list">' + 
                '</ul>' + 
            '</div>'+
          '</div>' +
        '</div>' +
        '<hr class="featurette-divider">';
    
        if (_i % 2 === 0) {
            $(".projects-background").append(project_even_list);
            for(var _j = 0; _j < project_skills.length; _j++){
                $(".skill-list").last().append('<li>'+ project_skills[_j] + '</li>');
            }
        }
        else {
            $(".projects-background").append(project_odd_list);
            for(var _j = 0; _j < project_skills.length; _j++){
                $(".skill-list").last().append('<li>'+ project_skills[_j] + '</li>');
            }
        }

        if(project_image_or_video == "Video" || project_image_or_video == "video"){
          $(".col-md-5").last().empty();
          $(".col-md-5").last().append(project_image);
        }

    }

})();


