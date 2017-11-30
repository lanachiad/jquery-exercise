// Please complete the below exercises preferrably using JQuery
$(document).ready(function() {
  // 1. Make each item's paragraph collapse/expand when the title is clicked

  $('.head').on('click', function(e) {
    const description = $(this).siblings('.description');
    if (description.is(':visible')) {
      description.slideUp();
    } else {
      description.slideDown();
    }
  });

  // 2. Remove each item when we click on the closing X

  $('.close').on('click', function(e) {
    const item = $(this).closest('.item');
    item.remove();
  });

  // 3. Create a new item using the input field
  //    The title of the new item has to match the input value
  //    The new item should also have the same properties (collapse/expand and close) as the other items

  //    Optional:
  //    If the user clicks "Add New" and the input is empty,
  //    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
  //    depending on the number of items already on the page

  $('.add').on('click', function(e) {
    e.preventDefault();
    const itemList = $('.item-list');
    const newTitle = $('#newtitle').val();
    const i = itemList.children().length;
    let title;
    if (newTitle.length > 0) {
      title = newTitle;
    } else {
      title = 'Title ' + (i + 1);
    }

    itemList.append(
      "<div class='item'><div class='head'><h1 class='title'>" +
        title +
        "</h1><span class='close'>x</span></div><p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p></div>"
    );
  });
});
