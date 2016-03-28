var committee = { "data": [{"name": "Ruby Childs",
			             "twitter": "rubychilds",
			             "github": "https://github.com/rubychilds",
			             "linkedin": "https://www.linkedin.com/in/rubychilds1",
			             "personal_website": "http://rubychilds.com/",
			             "image": "images/ruby.png"},

			            {"name": "Elena Chatzimichali",
			             "twitter": "eaHatz",
			             "github": "",
			             "linkedin": "https://uk.linkedin.com/in/eachatzimichali",
			             "personal_website": "",
			             "image": "images/elena.png"
			            },

			            {"name": "Graham Markall",
			             "twitter": "gmarkall",
			             "github": "https://github.com/gmarkall",
			             "linkedin": "https://www.linkedin.com/in/graham-markall-0087a215",
			             "personal_website": "http://www.big-grey.co.uk",
			             "image": "images/graham.jpg"},

			            {"name": "Ian Ozsvald",
			            "twitter": "ianozsvald",
			            "github": "https://github.com/ianozsvald/",
			            "linkedin": "http://www.linkedin.com/in/ianozsvald",
			            "personal_website": "http://ianozsvald.com/",
			            "image": "images/ian.jpg"},

			            {"name": "Chih-Chun Chen",
			              "twitter": "chihchun_chen",
			              "github": "https://github.com/cambridgecoding",
			              "linkedin": "https://www.linkedin.com/in/chihchunchen",
			              "personal_website": "http://abmcet.net/Chih-Chun_Chen/home.html",
			              "image": "images/chiha.png"
			            },

			            {"name": "Marco Bonzanini",
			              "twitter": "marcobonzanini",
			              "github": "https://github.com/bonzanini",
			              "linkedin": "https://uk.linkedin.com/in/marcobonzanini",
			              "personal_website": "http://marcobonzanini.com",
			              "image": "images/marco.jpg"
			            },

			            {"name": "Katie Barr",
			              "twitter": "drkbarr",
			              "github": "https://github.com/kebarr",
			              "linkedin": "https://uk.linkedin.com/in/dr-katie-barr-40a49b27",
			              "personal_website": "",
			              "image": "images/katie.png"
			            },

			            {"name": "Emlyn Clay",
			              "twitter": "emlynclay",
			              "github": "https://github.com/emlync",
			              "linkedin": "https://www.linkedin.com/in/emlynclay",
			              "personal_website": "http://emlynclay.co.uk",
			              "image": "images/emlyn.png"
			            },

			            {"name": "Daniel Slater",
			              "twitter": "danielslaterish",
			              "github": "https://github.com/DanielSlater/",
			              "linkedin": "https://uk.linkedin.com/in/daniel-slater-3032a016",
			              "personal_website": "www.danielslater.net",
			              "image": "images/daniel.png"
			            },

			            {"name": "Linda Uruchurtu",
			              "twitter": "lindauruchurtu",
			              "github": "",
			              "linkedin": "https://www.linkedin.com/in/lindauruchurtu",
			              "personal_website": "www.danielslater.net",
			              "image": "images/linda.jpg"
			            },

			            {"name": "Priya Gogna",
			            "github": "https://github.com/pri9",
			            "linkedin": "https://uk.linkedin.com/in/priyagogna",
			            "twitter": "hello_kepler22b",
			            "personal_website": "",
			            "image": "images/priya.png"
			          },

			          {"name": "Maria Lehl",
			            "github": "",
			            "linkedin":	"https://uk.linkedin.com/in/maria-lehl-51264b92",
			            "twitter": "",
			            "personal_website": "",
			            "image": "images/maria.png"
			          },

			          {"name": "Giles Weaver",
			            "github": "",
			            "linkedin":	"https://uk.linkedin.com/in/giles-weaver-3b66371",
			            "twitter": "gilesweaver",
			            "personal_website": "",
			            "image": "images/giles.jpg"
			          }
			]};


$(function(){
		GetCommittee();
});

function Edit(elm){
  var id = $(elm).attr('data-id');
      var person = committee["data"][parseInt(id)];
      $('#editTitle').val(person['name']);
      $('#editDescription').val(person['email']);
      $('#editModal').modal();
}

function Url(elem){
  open($(elem).attr('href'));
}

function GetCommittee(){
			data = committee["data"];
			var itemsPerRow = 6;
		  var div = $('<div>').attr('class', 'row');
		  var well = $('.reviewers').empty();
			var container = $('<div>').attr({'class':"center-block container"});
		  for (var i = 0; i < data.length; i++) {
		  	var mainDiv = CreateThumb(i, data[i].name, data[i].bio, data[i].email, data[i].twitter,
		  														data[i].github, data[i].linkedin, data[i].personal_website,
		  														data[i].image);
		    div.append(mainDiv);
				if((i+1)%itemsPerRow == 0 && i != 0){
					container.append(div);
					div = $('<div>').attr('class', 'row');
				}
				else {
					div.append(mainDiv);
				}
		  }
		  container.append(div);
		  well.append(container);
}

function CreateThumb(id, name, bio, email, twitter, github, linkedin, personal_website, image){

  var mainDiv = $('<div>').attr({
        'class': "col-sm-2 portfolio-item"
  });
  var portfolioLink = $('<a>').attr({
      'class': 'portfolio-link',
      'data-toggle': 'modal'
  });
	var caption = $('<div>').attr({
      'class': 'caption'
  });
  var caption_content = $('<div>').attr({
      'class': 'caption-content'
  });
  var name = $('<div>').attr({
			'data-id': id,
			'onclick': 'Edit(this)'
	}).append($('<p>').append($('<h4>').text(name)));

	var icons = $('<div class="icons center-block">');

	if(twitter != ''){
		var twitter = $('<div>').attr({
					'class': "btn-social nav-entry",
				}).append($('<i class="fa fa-fw fa-twitter">').attr({'href': 'http://twitter.com/' + twitter,
																														 'onclick': "Url(this)"
																													}));
		icons.append(twitter);
	}

	if(linkedin){
		var linkedin = $('<div>').attr({
					 'class': "btn-social nav-entry",
				}).append($('<i class="fa fa-fw fa-linkedin">').attr({'href': linkedin,
																														 'onclick': "Url(this)"
																													}));
	  icons.append(linkedin);
	}

	if(personal_website){
		var web = $('<div>').attr({
						'class': "btn-social nav-entry",
				}).append($('<i class="fa fa-fw fa-globe">').attr({'href': personal_website,
																													 'onclick': "Url(this)"
																													 }));
	  icons.append(web);
	}

  if(github){
		var github = $('<div>').attr({
					'class': "btn-social nav-entry",
			  }).append($('<i class="fa fa-fw fa-github">').attr({'href': github,
																													 'onclick': "Url(this)"
																													}));
		icons.append(github);
	}

  var image = $('<img>').attr({
    'class': "img-responsive center-block",
    'src': 'https://cdn.rawgit.com/PyDataLondon/pydatalondon.github.io/master/conf_2016_assets/' + image,
    'alt': '',
		'width': '150px',
		'height': '150px'
  });

  caption_content.append(name);
  caption_content.append(icons);
  caption.append(caption_content);
  portfolioLink.append(caption);
  portfolioLink.append(image);
  mainDiv.append(portfolioLink);

  return mainDiv;
}
