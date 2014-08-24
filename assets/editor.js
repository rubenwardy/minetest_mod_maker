var project = {name: "", items: []};


// As of 22nd of August 2015, in minetest_game
var minetest_items = ["default:cactus", "default:copper_lump", "dye:violet", "default:pick_diamond", "default:bronze_ingot", "stairs:stair_brick", "default:clay_brick", "default:rail", "default:grass_4", "air", "default:mese_crystal_fragment", "default:pick_mese", "xpanes:bar_9", "default:junglewood", "default:gold_lump", "xpanes:pane_5", "dye:pink", "stairs:stair_junglewoodupside_down", "default:mese", "xpanes:bar_7", "default:axe_wood", "xpanes:bar", "stairs:slab_woodupside_down", "default:obsidian_shard", "farming:wheat_3", "default:paper", "flowers:dandelion_yellow", "stairs:slab_desert_stone", "doors:door_wood_t_2", "default:coal_lump", "farming:wheat_6", "screwdriver:screwdriver3", "farming:hoe_stone", "doors:door_wood_b_2", "default:leaves", "default:diamond", "stairs:slab_brick", "default:wood", "farming:wheat_2", "wool:pink", "default:torch", "xpanes:bar_14", "default:sword_stone", "stairs:stair_desert_cobbleupside_down", "xpanes:pane_9", "default:book", "default:chest_locked", "farming:wheat", "default:lava_source", "tnt:tnt", "default:bookshelf", "xpanes:pane_11", "farming:wheat_5", "wool:brown", "stairs:slab_stonebrickupside_down", "default:glass", "farming:desert_sand_soil_wet", "default:dry_shrub", "default:mese_crystal", "xpanes:pane_12", "dye:dark_grey", "dye:brown", "dye:dark_green", "default:dirt_with_snow", "default:cloud", "default:snow", "stairs:stair_brickupside_down", "farming:bread", "default:shovel_diamond", "xpanes:bar_4", "default:papyrus", "default:chest", "dye:yellow", "xpanes:bar_10", "doors:door_obsidian_glass_b_1", "wool:red", "default:stone_with_gold", "wool:violet", "stairs:stair_desert_stoneupside_down", "dye:blue", "farming:hoe_steel", "dye:grey", "dye:orange", "wool:yellow", "xpanes:pane_10", "default:furnace", "dye:green", "default:furnace_active", "wool:black", "default:grass_3", "wool:dark_green", "default:desert_cobble", "xpanes:pane_7", "default:iron_lump", "default:axe_diamond", "default:stone_with_mese", "dye:white", "screwdriver:screwdriver1", "dye:cyan", "stairs:slab_wood", "default:gravel", "farming:seed_wheat", "farming:soil_wet", "default:fence_wood", "default:axe_mese", "stairs:stair_wood", "doors:door_steel_b_2", "default:pick_steel", "xpanes:bar_13", "default:nyancat_rainbow", "wool:dark_grey", "xpanes:pane_4", "flowers:dandelion_white", "bucket:bucket_lava", "farming:wheat_4", "default:water_flowing", "default:mossycobble", "stairs:slab_desert_stoneupside_down", "farming:hoe_wood", "ignore", "default:coalblock", "doors:door_obsidian_glass", "xpanes:bar_5", "default:bronzeblock", "bucket:bucket_empty", "default:stone_with_diamond", "xpanes:bar_11", "doors:door_wood_b_1", "doors:door_glass_b_2", "default:grass_5", "tnt:boom", "farming:soil", "default:grass_2", "stairs:slab_sandstonebrick", "doors:door_glass_t_1", "default:clay_lump", "farming:cotton_4", "xpanes:bar_8", "xpanes:bar_12", "xpanes:bar_1", "default:sandstone", "farming:cotton", "default:obsidian", "xpanes:pane_3", "default:shovel_stone", "default:copper_ingot", "default:sword_diamond", "vessels:steel_bottle", "default:stick", "screwdriver:screwdriver4", "farming:hoe_mese", "default:pick_wood", "farming:cotton_1", "doors:door_glass", "farming:hoe_bronze", "default:pick_bronze", "doors:door_glass_t_2", "wool:white", "default:copperblock", "default:obsidian_glass", "default:snowblock", "default:nyancat", "xpanes:bar_15", "default:sword_bronze", "default:brick", "stairs:stair_desert_cobble", "farming:wheat_7", "farming:wheat_8", "farming:cotton_2", "farming:cotton_3", "default:ladder", "stairs:stair_stone", "bones:bones", "default:cobble", "bucket:bucket_water", "doors:trapdoor_open", "default:pick_stone", "doors:trapdoor", "stairs:stair_desert_stonebrickupside_down", "default:sandstonebrick", "default:shovel_bronze", "default:shovel_steel", "wool:green", "stairs:stair_junglewood", "default:stone_with_iron", "stairs:slab_stoneupside_down", "doors:door_glass_b_1", "farming:cotton_7", "farming:wheat_1", "doors:door_steel_t_2", "default:clay", "doors:door_steel_t_1", "default:junglesapling", "farming:hoe_diamond", "default:desert_sand", "doors:door_steel", "default:stone_with_coal", "default:axe_stone", "farming:cotton_6", "xpanes:pane_8", "stairs:stair_sandstonebrick", "flowers:tulip", "xpanes:pane", "flowers:geranium", "default:grass_1", "tnt:gunpowder", "stairs:stair_stonebrick", "default:axe_bronze", "default:gold_ingot", "stairs:slab_junglewoodupside_down", "farming:cotton_8", "doors:door_obsidian_glass_b_2", "xpanes:pane_15", "stairs:slab_sandstonebrickupside_down", "stairs:stair_stonebrickupside_down", "default:apple", "flowers:viola", "default:desert_stone", "stairs:slab_sandstoneupside_down", "stairs:slab_sandstone", "default:sword_mese", "stairs:stair_sandstoneupside_down", "stairs:stair_sandstone", "xpanes:bar_3", "default:stone_with_copper", "default:sword_steel", "default:ice", "stairs:slab_brickupside_down", "stairs:stair_sandstonebrickupside_down", "xpanes:pane_1", "default:desert_stonebrick", "default:dirt", "default:shovel_wood", "stairs:slab_desert_stonebrickupside_down", "xpanes:pane_2", "stairs:slab_desert_stonebrick", "doors:door_obsidian_glass_t_2", "stairs:stair_desert_stonebrick", "stairs:slab_desert_cobbleupside_down", "default:sand", "default:axe_steel", "default:water_source", "wool:blue", "stairs:stair_desert_stone", "xpanes:pane_14", "stairs:slab_cobble", "stairs:stair_cobbleupside_down", "stairs:stair_cobble", "doors:door_obsidian_glass_t_1", "default:sword_wood", "tnt:tnt_burning", "default:jungleleaves", "stairs:slab_desert_cobble", "default:dirt_with_grass_footsteps", "stairs:stair_stoneupside_down", "boats:boat", "default:dirt_with_grass", "default:tree", "default:stone", "fire:basic_flame", "vessels:glass_bottle", "default:sapling", "screwdriver:screwdriver2", "tnt:gunpowder_burning", "wool:cyan", "doors:door_wood_t_1", "vessels:glass_fragments", "vessels:drinking_glass", "stairs:slab_junglewood", "doors:door_wood", "default:lava_flowing", "farming:cotton_5", "default:diamondblock", "doors:door_steel_b_1", "dye:black", "wool:orange", "stairs:slab_stone", "farming:seed_cotton", "default:stonebrick", "farming:flour", "stairs:stair_woodupside_down", "default:junglegrass", "default:steel_ingot", "default:sign_wall", "dye:red", "default:shovel_mese", "default:goldblock", "xpanes:pane_6", "default:jungletree", "wool:magenta", "stairs:slab_cobbleupside_down", "flowers:rose", "wool:grey", "xpanes:bar_6", "xpanes:bar_2", "xpanes:pane_13", "farming:desert_sand_soil", "dye:magenta", "default:steelblock", "unknown", "screwdriver:screwdriver", "stairs:slab_stonebrick"];

function displayName(fromTitle)
{
	var tmp = "<p>";
	tmp += "Please enter a mod name. ";
	tmp += "This will be the name of the folder that ";
	tmp += "the mod will be placed in when installed.";
	tmp += "</p><p>You must make sure the mod name has not already been used. ";
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
	tmp += "When you are done, click next. You can come back to this page after clicking next. ";
	tmp += "Items are things that you can move around in your inventory. They can be blocks or ";
	tmp += "unplacable things.</p>";

	tmp += "<p id=\"buttons\" style=\"margin-top: 0;\">";
	tmp += "<a id=\"btn_create_node\" class=\"button\">Create Node</a>";
	tmp += "<a id=\"btn_create_craft\" class=\"button\">Create Craft</a>";
	tmp += "<a id=\"btn_change_name\" class=\"button\">Change Mod Name</a>";
	tmp += "<a id=\"btn_save\" download=\"save.json\" class=\"button\">Save</a>";
	tmp += "<a id=\"btn_next\" class=\"button long_button\">Next</a>";
	tmp += "</p>";

	tmp += "<h2>Nodes and Craftitems</h2>";
	tmp += "<table class=\"item_list\"><tr><th style=\"width: 30%;\">Name</th><th style=\"width: 10%;\">Type</th><th style=\"width: 30%;\">Description</th><th>Actions</th></tr>";

	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];
		if (item.type == "node") {
			tmp += "<tr><td>" + item.type + "</td><td>" + item.name + "</td><td>" + item.desc + "</td><td>";
			tmp += "<a id=\""+i+"\" class=\"craft_with button\">Add Craft</a> ";
			tmp += "<a id=\""+i+"\" class=\"delete_btn button\">Delete</a></td></tr>";
		}
	}
	tmp += "</table>";

	tmp += "<h2>Craft Recipes</h2>";
	tmp += "<table class=\"item_list\"><tr><th style=\"width: 30%;\">Output</th><th style=\"width: 50%;\">Recipe</th><th>Actions</th></tr>";
	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];
		if (item.type == "craft") {
			tmp += "<tr><td>" + item.output + " (" + item.num + ")</td>";
			tmp += "<td>" + recipePrint(item.recipe) + (item.shapeless?"<br /><i>Shapeless</i>": "") +"</td>";
			tmp += "<td><a id=\""+i+"\" class=\"delete_btn button\">Delete</a></td></tr>";
		}
	}
	tmp += "</table>";

	$("#page").html(tmp);
	$("#btn_create_node").click(function() {
		displayNode();		
	});
	$("#btn_create_craft").click(function() {
		displayCraft(null);		
	});
	$("#btn_change_name").click(function() {
		displayName(false);
	});
	$("#btn_next").click(function() {
		displaySetup();
	});
	$("#btn_save").click(function() {
		var data = $.toJSON(project);
		window.open("data:text/json;base64,"+btoa(data));
	});
	$(".craft_with").click(function() {		
		displayCraft(project.items[$(this).attr('id')]);
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

	var select = "<select name=\"slTiles\" id=\"tileMode\">";
	select += selectOP("single", "Same texture for all the surfaces", true);
	select += selectOP("unique", "Unique texture for each of the surfaces", false);
	tmp += makeRow("tiles", "Texture", select, "Choose how you want to add images to each of the surfaces");


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
		var tileMode = $("#tileMode").val();
	
		project.items.push({
			name: name,
			type: "node",
			desc: desc,
			digMode: digMode,			
			tileMode: tileMode
		});

		displayMain();
	});
}

function displayCraft(output)
{
	var tmp = "<p>Type in the craft ingredients' names in the boxes to add them.</p>";

	tmp += "<table id=\"craft_table\">\n";
	for (var y = 0; y < 3; y++) {
		tmp += "<tr>";
		for (var x = 0; x < 3; x++) {
			tmp += "<td><input type=\"text\" class=\"craft\" id=\"craft_" +
					x + "_" + y +"\" /></td>";
		}
		tmp += "</tr>\n";
	}
	tmp += "</table>";
	tmp += "<p><input type=\"checkbox\" id=\"shapeless\" name=\"shapeless\"> Shapeless</p>";
	tmp += "<p>Output: <input type=\"text\" class=\"craft\" id=\"craft_output\" " +
			(output?("value=\"{this}:"+output.name+"\" "):"") +
			"/> <input id=\"craft_output_n\" type=\"number\" value=1></p>";
	tmp += "<p id=\"buttons\"><a class=\"button\" id=\"btn_home\">Home</a> <a class=\"button\" id=\"btn_create\">Create</a></p>";
	$("#page").html(tmp);
	$(".craft").autocomplete({source: minetest_items});
	$("#btn_home").click(function() {
		displayMain();
	});
	$("#btn_create").click(function() {
		var craft = [];
		for (var y = 0; y < 3; y++) {
			var row = [];
			for (var x = 0; x < 3; x++) {
				var tmp = $("#craft_" + x + "_" + y).val();
				row.push(tmp);
			}
			craft.push(row);
		}
	
		project.items.push({
			output: $("#craft_output").val(),
			num: $("#craft_output_n").val(),
			type: "craft",
			recipe: craft,
			shapeless: $("#shapeless").val()
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
		if (item.type == "node") {
			res += "\nminetest.register_"+item.type+"(\""+project.name+":"+item.name+"\", {\n";
			res += "\tdescription = \"" + item.desc + "\",\n";		
			res += "\ttiles = {\n";
			if (!item.tileMode || item.tileMode == "" || item.tileMode == "unique") {
				res += "\t\t\""+project.name+"_"+item.name+"_top.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_bottom.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_right.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_left.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_back.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_front.png\"\n";
			} else {
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- top\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- bottom\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- right\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- left\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- back\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\"  -- front\n";
			}
			res += "\t},\n";
			res += "\tgroups = {" + item.digMode + " = 2}\n";
		} else if (item.type == "craft") {
			res += "\nminetest.register_craft({\n";
			res += "\toutput = \"" + item.output + "\",\n";
			if (item.shapeless)
				res += "\ttype = \"shapeless\",\n";
			res += "\trecipe = {\n";
			for (var y = 0; y < 3; y++) {
				res += "\t\t{";
				for (var x = 0; x < 3; x++) {					
					res += "\"" + item.recipe[y][x] + "\"";
					if (x != 2)
						res += ", ";
				}
				res += "},\n";
			}
			res += "\t}\n"; 	
		}
		res += "})\n";	
	}

	return res;
}

function recipePrint(recipe)
{
	var res = "<table class=\"recipe\">";
	for (var y = 0; y < 3; y++) {
		res += "<tr>";
		for (var x = 0; x < 3; x++) {					
			res += "<td>" + recipe[y][x] + "</td>";
		}
		res += "</tr>";
	}
	res += "</table>";
	return res;
}

function displaySetup()
{
	var tmp = "<p style=\"margin:0;\">There are a few things you need to do before we can continue. You need ";
	tmp += "to create the folder structure for a mod.</p>";
	tmp += "<ul style=\"margin-left: 1.5em;\">";
	tmp += "<li>Find the <a href=\"http://wiki.minetest.com/wiki/Installing_mods#Install\" target=\"blank\">location";
	tmp += "where you install mods</a>.</li>";
	tmp += "<li>Create a folder called '" + project.name + "'. This is your mod's folder.</li>";
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
	function genTile(name, desc, surface)
	{
		return "<tr><td>"+project.name+"_"+name+"_"+surface+".png</td><td>The "+surface+" surface of "+desc+"</td></tr>";
	}

	var tmp = "<p>You need to create the following textures. Save them in the 'textures' folder in ";
	tmp += "the mod's folder under the file names given.</p>";
	tmp += "<table id=\"item_list\"><tr><th>Filename</th><th>Description</th></tr>";
	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];
		if (item.type == "node") {
			if (!item.tileMode || item.tileMode == "" || item.tileMode == "unique") {
				tmp += genTile(item.name, item.desc, "top");
				tmp += genTile(item.name, item.desc, "bottom");
				tmp += genTile(item.name, item.desc, "right");
				tmp += genTile(item.name, item.desc, "left");
				tmp += genTile(item.name, item.desc, "back");
				tmp += genTile(item.name, item.desc, "front");
			} else {
				tmp += "<tr><td>"+project.name+"_"+item.name+".png</td><td>Use for all surfaces "+item.desc+"</td></tr>";
			}		
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
