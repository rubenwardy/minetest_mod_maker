var project = {name: "", items: []};

function displayName(fromTitle)
{
	var tmp = "<p>";
	tmp += "Please enter a mod name. ";
	tmp += "This will be the name of the folder that ";
	tmp += "the mod will be placed in when installed.";
	tmp += "</p><p>Make sure the mod name has not already been used. ";
	tmp += "Look on the forums to check.<br />";
	tmp += "<span id=\"allowed\">Only lower case letters, numbers and/or underscore characters may be used.</span></p>";
	tmp += "<p>Name: <input id=\"name\" name=\"name\" value=\""+project.name+"\" /></p>";
	tmp += "<p id=\"buttons\"><a id=\"btn_continue_1\" class=\"button long_button\">" + ((fromTitle)?"Next":"Change") + "</a></p>";
	$("#page").html(tmp);
	$("#btn_continue_1").click(function() {
		var input = $("#name").val();
		var reg = /^[a-z0-9_]+$/;
		if (!reg.test(input)) {
			$("#allowed").css("color", "red");
			return;
		}
		project.name = input;
		displayMain();
	});
}

function displayMain()
{
	var tmp = "<p>On this page you can create and delete nodes to be added to the mod. ";
	tmp += "When you are done, click next. You can come back to this page after clicking next.</p>";

	tmp += "<table id=\"item_list\"><tr><th style=\"width: 120px;\">Name</th><th style=\"width: 60px;\">Type</th><th>Description</th><th>Actions</th></tr>";

	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];
		tmp += "<tr><td>" + item.name + "</td><td>" + item.type + "</td><td>" + item.desc + "</td><td>";
		tmp += "<a id=\""+i+"\" class=\"delete_btn button\">Delete</a></td></tr>";
	}
	tmp += "</table>";

	tmp += "<p id=\"buttons\">";
	tmp += "<a id=\"btn_create_node\" class=\"button\">Create Node</a>";
	tmp += "<a id=\"btn_change_name\" class=\"button\">Change Mod Name</a>";
	tmp += "<a id=\"btn_next\" class=\"button long_button\">Next</a>";
	tmp += "</p>";
	$("#page").html(tmp);
	$("#btn_create_node").click(function() {
		displayNode();		
	});
	$("#btn_change_name").click(function() {
		displayName(false);
	});
	$("#btn_next").click(function() {
		displaySetup();
	});
	$(".delete_btn").click(function() {
		project.items.splice($(this).attr('id'), 1);
		displayMain();
	});
	
}

function displayNode()
{
	var tmp = "<p>Use this page to create a node. A node is what you may know as a block - ";
	tmp += "A 1by1by1 metre block in the game.</p>";

	tmp += "<table id=\"form_table\">";
	function makeRow(name, label, value, note)
	{
		var res = "<tr><td>"+label+":</td><td>"+value+"</td>";
		res += "<td id=\""+name+"_note\">" +  note + "</td></tr>";
		return res;
	}
	function makeRow_Text(name, label, note)
	{
		return makeRow(name, label, "<input type=\"text\" id=\""+name+"\" name=\""+name+"\" />", note);
	}
	tmp += makeRow_Text("name", "Name", "The name of the node in code. Must be unique. Only lower case letters, numbers and/or underscore characters may be used.");
	tmp += makeRow_Text("desc", "Description", "Displayed in tooltips. Only letters, numbers and/or underscores characters may be used.");

	var select = "<select name=\"slDM\" id=\"digMode\">";
	function selectOP(name, desc, sel)
	{
		return "<option"+(sel?" selected":"") + " value=\""+name+"\">"+name+(desc!=""?(" - "+desc+"."):"")+"</option>";
	}
	select += selectOP("cracky", "Tough but crackable stuff like stone", true);
	select += selectOP("crumbly", "Dirt, sand", false);
	select += selectOP("snappy", "Cut using fine tools", false);
	select += selectOP("choppy", "Cut using force (trees, wooden planks)", false);
	select += selectOP("fleshy", "Living things like animals and the player", false);
	select += selectOP("explody", "Especially prone to explosion", false);
	select += selectOP("oddly_breakable_by_hand", "Breaks easily", false);	
	tmp += makeRow("dig", "Dig Mode", select, "The dig mode of a node determines which tools work best, and how quick it is to dig.");

	/*var select = "<select name=\"slSD\" id=\"sound\">";
	select += selectOP("none", "", true);
	select += selectOP("custom", "use custom sounds", false);
	select += selectOP("dirt", "use dirt sounds", false);
	select += selectOP("glass", "use glass sounds", false);
	tmp += makeRow("sound", "Sounds", select, "");*/
	tmp += "</table>";
	tmp += "<p id=\"buttons\"><a class=\"button\" id=\"btn_home\">Back</a> <a class=\"button\" id=\"btn_create\">Create</a></p>";
	$("#page").html(tmp);
	$("#btn_home").click(function() {
		displayMain();
	});
	$("#btn_create").click(function() {		
		$("#name_note").css("color", "black");
		$("#desc_note").css("color", "black");

		var name = $("#name").val();
		var reg1 = /^[a-z0-9_]+$/;
		if (name=="" || !reg1.test(name)) {
			$("#name_note").css("color", "red");
			return;
		}

		var desc = $("#desc").val();
		var reg2 = /^[\w ]+$/;
		if (desc=="" || !reg2.test(desc)) {
			$("#desc_note").css("color", "red");
			return;
		}

		var digMode = $("#digMode").val();
	
		project.items.push({
			name: name,
			type: "node",
			desc: desc,
			digMode: digMode
		});

		displayMain();
	});
}

function generateCode()
{
	var res = "-- Mod: " + project.name + "\n";
	res += "-- Code generated by the Simple Minetest Mod Maker\n";
	res += "--   ( https://rubenwardy.github.io/minetest_mod_maker )\n";

	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];

		res += "\nminetest.register_"+item.type+"(\""+project.name+":"+item.name+"\", {\n";
		res += "\tdescription = \"" + item.desc + "\",\n";
		if (item.type == "node") {
			res += "\ttiles = {\n";
			res += "\t\t\""+project.name+"_"+item.name+"_top.png\",\n";
			res += "\t\t\""+project.name+"_"+item.name+"_bottom.png\",\n";
			res += "\t\t\""+project.name+"_"+item.name+"_right.png\",\n";
			res += "\t\t\""+project.name+"_"+item.name+"_left.png\",\n";
			res += "\t\t\""+project.name+"_"+item.name+"_back.png\",\n";
			res += "\t\t\""+project.name+"_"+item.name+"_front.png\"\n";
			res += "\t},\n";
			res += "\tgroups = {" + item.digMode + " = 2}\n";
		}
		res += "})\n";	
	}

	return res;
}

function displaySetup()
{
	var tmp = "<p style=\"margin:0;\">There are a few things you need to do before we can continue. You need ";
	tmp += "to create the folder structure for a mod.</p>";
	tmp += "<ul style=\"margin-left: 1.5em;\">";
	tmp += "<li>Find the <a href=\"http://wiki.minetest.com/wiki/Installing_mods#Install\" target=\"blank\">location";
	tmp += "where you install mods</a>.</li>";
	tmp += "<li>Create a folder called '"+project.name+"'. This is your mod's folder.</li>";
	tmp += "<li>In that folder, create a folder called 'textures'.</li>";
	tmp += "<li>Open up a text editor. The text editor must be a plain text editor. ";
	tmp += "If you are on Windows, we recommend that you download <a href=\"http://notepad-plus-plus.org/\"";
	tmp += " target=\"blank\">Notepad++</a>. However, WordPad is sufficient. ";
	tmp += "You <b>cannot</b> use Microsoft Word or Open Office.</li>";
	tmp += "<li>Copy and paste the code at the bottom of this page into the text editor, ";
	tmp += "and save as 'init.lua' in the mod's folder.</li>";
	tmp += "<li>When you are done, click next to read about adding textures to your nodes.</li>";
	tmp += "</ul>";

	tmp += "<p style=\"margin:0;\"><textarea id=\"code_output\">";
	tmp += generateCode();
	tmp += "</textarea></p>";


	tmp += "<p id=\"buttons\" style=\"margin-top:0;\"><a class=\"button long_button\" id=\"btn_home\">Back</a> ";
	tmp += "<a class=\"button long_button\" id=\"btn_next\">Next</a></p>";

	$("#page").html(tmp);
	$("#btn_home").click(function() {
		displayMain();
	});
	$("#btn_next").click(function() {
		displayTextures();
	});
}

function displayTextures()
{
	var tmp = "<p>You need to create the following textures. Save them in the 'textures' folder in ";
	tmp += "the mod's folder under the file names given.</p>";
	tmp += "<table id=\"item_list\"><tr><th>Filename</th><th>Description</th></tr>";
	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];
		if (item.type == "node") {
			tmp += "<tr><td>"+project.name+"_"+item.name+"_top.png</td><td>The top surface of "+item.desc+"</td></tr>";
			tmp += "<tr><td>"+project.name+"_"+item.name+"_bottom.png</td><td>The bottom surface of "+item.desc+"</td></tr>";
			tmp += "<tr><td>"+project.name+"_"+item.name+"_right.png</td><td>The right surface of "+item.desc+"</td></tr>";
			tmp += "<tr><td>"+project.name+"_"+item.name+"_left.png</td><td>The left surface of "+item.desc+"</td></tr>";
			tmp += "<tr><td>"+project.name+"_"+item.name+"_back.png</td><td>The back surface of "+item.desc+"</td></tr>";
			tmp += "<tr><td>"+project.name+"_"+item.name+"_front.png</td><td>The front surface of "+item.desc+"</td></tr>";
		}
	}
	tmp += "</table>";

	tmp += "<p>You're done!</p>";
	
	tmp += "<p id=\"buttons\"><a class=\"button long_button\" id=\"btn_back\">Back</a> ";
	tmp += "<a class=\"button long_button\" id=\"btn_home\">Home</a></p>";

	$("#page").html(tmp);	
	$("#btn_back").click(function() {
		displaySetup();
	});
	$("#btn_home").click(function() {
		displayMain();
	});
}

$(function() {
	$("#js_message").hide();
	$("#btn_start").show();
	$("#btn_start").click(function() {
		displayName(true);
	});
});
