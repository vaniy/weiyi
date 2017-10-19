$(function () {
  var callAjax = true;

  $('.language.pull-right button').on('click', function (e) {
    var name = $('#fullscreen-navigation')[0].className;
    if (name.indexOf('active') !== -1) {
      // $('#fullscreen-navigation')[0].className = name.replace('active', '')
    }
    else {
      var language = undefined;
      if ($('html').attr('lang') === 'en') {
        language = 'USA'
      }
      else {
        language = 'CHN'
      }
      if (callAjax) {

        $.ajax({
          url: '/api/navigation',
          type: 'Get',
          data: { languageCode: language },
          dataType: 'JSON',
          cache: false,
          success: function (data) {
            if (data && data.length > 0) {
              var tab = '';
              var tabs = [];
              var initialCategorys = [];
              var initialCategoryDom = '';
              var initialTabId = '';
              data.map(function (child, index, input) {
                tab = tab + '<li><a style="cursor:pointer" target="' + child.tabId + '">' + child.tabName + '</li>'
                if (index === 0) {
                  initialTabId = child.tabId;
                }
                if (child.tabId === initialTabId) {
                  initialCategorys.push(child)
                }
                if (tabs.indexOf(child.tabId) === -1) {
                  tabs.push(child.tabId)
                }
              })
              // data.map((child, index) => {
              //   tab = tab + '<li><a style="cursor:pointer" target="' + child.tabId + '">' + child.tabName + '</li>'
              //   if (index === 0) {
              //     initialTabId = child.tabId;
              //   }
              //   if (child.tabId === initialTabId) {
              //     initialCategorys.push(child)
              //   }
              //   if (tabs.indexOf(child.tabId) === -1) {
              //     tabs.push(child.tabId)
              //   }
              // })

              initialCategoryDom = buildDom(initialCategorys);

              // $('[target="tid_2"]')[          
              $('.inner-section').append($(initialCategoryDom))
              $('#category-group-fa-xian').append($(tab))
              tabs.map(function (child, index) {
                var id = child;
                $('[target="' + child + '"]').on('click', function (e) {
                  $('.inner-section').html('');
                  var temp = [];
                  data.map(function (cld, idx) {
                    if (id === cld.tabId) {
                      temp.push(cld);
                    }
                  });
                  var tempDoms = buildDom(temp);
                  $('.inner-section').append($(tempDoms))
                })
              })

            }
          },
          error: function (data) {
            console.log('data', data)
          }
        })
      }
      $('#fullscreen-navigation')[0].className = name + ' active'

    }
  })
  var buildDom = function (data) {
    var lang = '';
    if ($('html').attr('lang') === 'en') {
      lang = 'en-US';
    }
    else {
      lang = 'zh-CN';
    }
    var initialCategoryDom = '';
    data.map(function (child, index) {
      if (index % 2 === 0) {
        var subcategoryDom = '';
        if (child.subcategorys && child.subcategorys.length > 0) {
          child.subcategorys.map(function (cld, idx) {
            subcategoryDom = subcategoryDom +
              '<li class=""><a href="/' + lang + '/product?sid=' + cld.sid + '">' + cld.subcategoryName + '</a></li>';
          })
        }
        initialCategoryDom = initialCategoryDom
          + '<div class="col-xs-12 col-md-4"><div class="category-group"><h3 class="category-group-heading">' + child.categoryName + '</h3>'
          + '<ul id="category-group-shou-gong-han-jie" class="nav-level-1">' + subcategoryDom + '</ul></div>';
      }
      else {
        var subcategoryDom = '';
        if (child.subcategorys && child.subcategorys.length > 0) {
          child.subcategorys.map(function (cld, idx) {
            subcategoryDom = subcategoryDom +
              '<li class=""><a href="/' + lang + '/product?sid=' + cld.sid + '">' + cld.subcategoryName + '</a></li>';
          })
        }
        initialCategoryDom = initialCategoryDom
          + '<div class="category-group"><h3 class="category-group-heading">' + child.categoryName + '</h3>'
          + '<ul id="category-group-shou-gong-han-jie" class="nav-level-1">' + subcategoryDom + '</ul></div></div>';
      }
    })
    return initialCategoryDom;
  }
  $('.navbar-toggle').on('click', function (e) {
    callAjax = false
    $('#fullscreen-navigation')[0].className = $('#fullscreen-navigation')[0].className.replace('active', '')
  })
  $('li.classic').on('click', function (e) {
    if ($('.lang-dropdown')[0].style.display === 'none') {
      $('.lang-dropdown').show()
    }
    else {
      $('.lang-dropdown').hide()
    }
  })
});