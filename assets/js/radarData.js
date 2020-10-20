var margin = {top: 50, right: 60, bottom: 100, left: 60};
			
var data2010 = [
[//Theft from vehicle
{axis:"January",value:710},{axis:"February",value:627},{axis:"March",value:713},{axis:"April",value:599},{axis:"May",value:676},{axis:"June",value:675},{axis:"July",value:685},{axis:"August",value:793},{axis:"September",value:833},{axis:"October",value:915},{axis:"November",value:725},{axis:"December",value:661}
],[//Break and Enter
{axis:"January",value:381},{axis:"February",value:355},{axis:"March",value:461},{axis:"April",value:459},{axis:"May",value:413},{axis:"June",value:408},{axis:"July",value:365},{axis:"August",value:449},	{axis:"September",value:371},{axis:"October",value:432},{axis:"November",value:411},{axis:"December",value:421}
],[//Mischief
{axis:"January",value:386},{axis:"February",value:357},{axis:"March",value:331},{axis:"April",value:357},{axis:"May",value:447},{axis:"June",value:391},{axis:"July",value:379},{axis:"August",value:397},	{axis:"September",value:341},{axis:"October",value:442},{axis:"November",value:354},{axis:"December",value:324}		
],[//Offence Against a Person
{axis:"January",value:313},{axis:"February",value:328},{axis:"March",value:305},{axis:"April",value:278},{axis:"May",value:318},{axis:"June",value:330},{axis:"July",value:357},{axis:"August",value:313},	{axis:"September",value:300},{axis:"October",value:320},{axis:"November",value:261},{axis:"December",value:309}
],[//Other Theft
{axis:"January",value:323},{axis:"February",value:291},{axis:"March",value:314},{axis:"April",value:287},{axis:"May",value:306},{axis:"June",value:279},{axis:"July",value:283},{axis:"August",value:293},	{axis:"September",value:287},{axis:"October",value:267},{axis:"November",value:250},{axis:"December",value:252}
],[//Theft of Bicycle
{axis:"January",value:052},{axis:"February",value:068},{axis:"March",value:089},{axis:"April",value:127},{axis:"May",value:143},{axis:"June",value:139},{axis:"July",value:231},{axis:"August",value:304},	{axis:"September",value:221},{axis:"October",value:169},{axis:"November",value:77},{axis:"December",value:47}
],[//Theft of Vehicle
{axis:"January",value:162},{axis:"February",value:103},{axis:"March",value:106},{axis:"April",value:122},{axis:"May",value:104},{axis:"June",value:114},{axis:"July",value:97},{axis:"August",value:158},	{axis:"September",value:132},{axis:"October",value:106},{axis:"November",value:109},{axis:"December",value:154}
],[//Vehicle Collision Or Pedestrian Struck
{axis:"January",value:123},{axis:"February",value:122},{axis:"March",value:108},{axis:"April",value:107},{axis:"May",value:078},{axis:"June",value:107},{axis:"July",value:103},{axis:"August",value:129},	{axis:"September",value:130},{axis:"October",value:099},{axis:"November",value:105},{axis:"December",value:126}
]];

///////// 2011
var data2011 = [
[//Theft from vehicle
{axis:"January",value:629},{axis:"February",value:680},{axis:"March",value:605},{axis:"April",value:510},{axis:"May",value:608},{axis:"June",value:521},{axis:"July",value:749},{axis:"August",value:679},	{axis:"September",value:671},{axis:"October",value:589},{axis:"November",value:568},{axis:"December",value:627}
],[//Break and Enter
{axis:"January",value:472},{axis:"February",value:358},{axis:"March",value:435},{axis:"April",value:381},{axis:"May",value:387},{axis:"June",value:552},{axis:"July",value:381},{axis:"August",value:371},	{axis:"September",value:439},{axis:"October",value:375},{axis:"November",value:400},{axis:"December",value:429}
],[//Mischief
{axis:"January",value:341},{axis:"February",value:319},{axis:"March",value:380},{axis:"April",value:378},{axis:"May",value:367},{axis:"June",value:809},{axis:"July",value:397},{axis:"August",value:381},	{axis:"September",value:358},{axis:"October",value:381},{axis:"November",value:349},{axis:"December",value:368}		
],[//Offence Against a Person
{axis:"January",value:344},{axis:"February",value:263},{axis:"March",value:306},{axis:"April",value:295},{axis:"May",value:391},{axis:"June",value:317},{axis:"July",value:360},{axis:"August",value:329},	{axis:"September",value:307},{axis:"October",value:334},{axis:"November",value:308},{axis:"December",value:307}
],[//Other Theft
{axis:"January",value:295},{axis:"February",value:279},{axis:"March",value:342},{axis:"April",value:327},{axis:"May",value:281},{axis:"June",value:301},{axis:"July",value:319},{axis:"August",value:296},	{axis:"September",value:276},{axis:"October",value:261},{axis:"November",value:312},{axis:"December",value:273}
],[//Theft of Bicycle	
{axis:"January",value:039},{axis:"February",value:047},{axis:"March",value:058},{axis:"April",value:084},{axis:"May",value:099},{axis:"June",value:175},{axis:"July",value:295},{axis:"August",value:249},	{axis:"September",value:171},{axis:"October",value:142},{axis:"November",value:93},{axis:"December",value:63}
],[//Theft of Vehicle
{axis:"January",value:115},{axis:"February",value:077},{axis:"March",value:085},{axis:"April",value:079},{axis:"May",value:074},{axis:"June",value:123},{axis:"July",value:106},{axis:"August",value:082},	{axis:"September",value:098},{axis:"October",value:102},{axis:"November",value:079},{axis:"December",value:073}
],[//Vehicle Collision Or Pedestrian Struck
{axis:"January",value:123},{axis:"February",value:098},{axis:"March",value:107},{axis:"April",value:088},{axis:"May",value:092},{axis:"June",value:103},{axis:"July",value:084},{axis:"August",value:101},	{axis:"September",value:114},{axis:"October",value:111},{axis:"November",value:141},{axis:"December",value:111}
]];

///////// 2012
var data2012 = [
[//Theft from vehicle
{axis:"January",value:666},{axis:"February",value:661},{axis:"March",value:733},{axis:"April",value:758},{axis:"May",value:597},{axis:"June",value:627},{axis:"July",value:599},{axis:"August",value:736},	{axis:"September",value:638},{axis:"October",value:639},{axis:"November",value:802},{axis:"December",value:641}
],[//Break and Enter
{axis:"January",value:410},{axis:"February",value:351},{axis:"March",value:396},{axis:"April",value:397},{axis:"May",value:369},{axis:"June",value:376},{axis:"July",value:342},{axis:"August",value:438},	{axis:"September",value:449},{axis:"October",value:455},{axis:"November",value:501},{axis:"December",value:514}
],[//Mischief
{axis:"January",value:348},{axis:"February",value:326},{axis:"March",value:335},{axis:"April",value:306},{axis:"May",value:380},{axis:"June",value:381},{axis:"July",value:360},{axis:"August",value:372},	{axis:"September",value:385},{axis:"October",value:359},{axis:"November",value:337},{axis:"December",value:324}		
],[//Offence Against a Person
{axis:"January",value:312},{axis:"February",value:290},{axis:"March",value:295},{axis:"April",value:301},{axis:"May",value:317},{axis:"June",value:354},{axis:"July",value:309},{axis:"August",value:382},	{axis:"September",value:353},{axis:"October",value:307},{axis:"November",value:277},{axis:"December",value:397}
],[//Other Theft
{axis:"January",value:313},{axis:"February",value:309},{axis:"March",value:309},{axis:"April",value:293},{axis:"May",value:299},{axis:"June",value:324},{axis:"July",value:280},{axis:"August",value:308},{axis:"September",value:311},{axis:"October",value:287},{axis:"November",value:301},{axis:"December",value:296}
],[//Theft of Bicycle
{axis:"January",value:076},{axis:"February",value:093},{axis:"March",value:091},{axis:"April",value:111},{axis:"May",value:174},{axis:"June",value:170},{axis:"July",value:251},{axis:"August",value:290},	{axis:"September",value:237},{axis:"October",value:181},{axis:"November",value:79},{axis:"December",value:64}
],[//Theft of Vehicle
{axis:"January",value:076},{axis:"February",value:056},{axis:"March",value:121},{axis:"April",value:093},{axis:"May",value:088},{axis:"June",value:114},{axis:"July",value:107},{axis:"August",value:112},	{axis:"September",value:110},{axis:"October",value:106},{axis:"November",value:096},{axis:"December",value:072}
],[//Vehicle Collision Or Pedestrian Struck
{axis:"January",value:125},{axis:"February",value:099},{axis:"March",value:124},{axis:"April",value:115},{axis:"May",value:123},{axis:"June",value:138},{axis:"July",value:119},{axis:"August",value:148},	{axis:"September",value:128},{axis:"October",value:112},{axis:"November",value:126},{axis:"December",value:135}
]];

///////// 2013
var data2013 = [
[//Theft from vehicle
{axis:"January",value:515},{axis:"February",value:497},{axis:"March",value:642},{axis:"April",value:721},{axis:"May",value:755},{axis:"June",value:668},{axis:"July",value:677},{axis:"August",value:683},	{axis:"September",value:669},{axis:"October",value:814},{axis:"November",value:892},{axis:"December",value:807}
],[//Break and Enter
{axis:"January",value:461},{axis:"February",value:370},{axis:"March",value:393},{axis:"April",value:428},{axis:"May",value:360},{axis:"June",value:390},{axis:"July",value:415},{axis:"August",value:388},	{axis:"September",value:380},{axis:"October",value:364},{axis:"November",value:426},{axis:"December",value:424}
],[//Mischief
{axis:"January",value:316},{axis:"February",value:291},{axis:"March",value:399},{axis:"April",value:352},{axis:"May",value:381},{axis:"June",value:323},{axis:"July",value:387},{axis:"August",value:346},	{axis:"September",value:356},{axis:"October",value:382},{axis:"November",value:347},{axis:"December",value:311}		
],[//Offence Against a Person
{axis:"January",value:284},{axis:"February",value:246},{axis:"March",value:325},{axis:"April",value:286},{axis:"May",value:316},{axis:"June",value:292},{axis:"July",value:355},{axis:"August",value:360},	{axis:"September",value:316},{axis:"October",value:333},{axis:"November",value:286},{axis:"December",value:384}
],[//Other Theft
{axis:"January",value:299},{axis:"February",value:246},{axis:"March",value:313},{axis:"April",value:261},{axis:"May",value:305},{axis:"June",value:320},{axis:"July",value:298},{axis:"August",value:276},	{axis:"September",value:283},{axis:"October",value:283},{axis:"November",value:383},{axis:"December",value:321}
],[//Theft of Bicycle
{axis:"January",value:069},{axis:"February",value:070},{axis:"March",value:135},{axis:"April",value:153},{axis:"May",value:183},{axis:"June",value:256},{axis:"July",value:271},{axis:"August",value:338},	{axis:"September",value:197},{axis:"October",value:162},{axis:"November",value:121},{axis:"December",value:079}
],[//Theft of Vehicle
{axis:"January",value:074},{axis:"February",value:095},{axis:"March",value:120},{axis:"April",value:103},{axis:"May",value:089},{axis:"June",value:084},{axis:"July",value:085},{axis:"August",value:064},	{axis:"September",value:090},{axis:"October",value:077},{axis:"November",value:083},{axis:"December",value:070}
],[//Vehicle Collision Or Pedestrian Struck
{axis:"January",value:107},{axis:"February",value:112},{axis:"March",value:110},{axis:"April",value:124},{axis:"May",value:144},{axis:"June",value:136},{axis:"July",value:130},{axis:"August",value:132},	{axis:"September",value:128},{axis:"October",value:155},{axis:"November",value:111},{axis:"December",value:111}
]
];

///////// 2014
var data2014 = [
[//Theft from vehicle
{axis:"January",value:718},{axis:"February",value:602},{axis:"March",value:682},{axis:"April",value:663},{axis:"May",value:858},{axis:"June",value:846},{axis:"July",value:1016},{axis:"August",value:1102},	{axis:"September",value:1042},{axis:"October",value:964},{axis:"November",value:822},{axis:"December",value:822}
],[//Break and Enter
{axis:"January",value:434},{axis:"February",value:374},{axis:"March",value:432},{axis:"April",value:431},{axis:"May",value:457},{axis:"June",value:423},{axis:"July",value:430},{axis:"August",value:435},	{axis:"September",value:425},{axis:"October",value:486},{axis:"November",value:462},{axis:"December",value:500}
],[//Mischief
{axis:"January",value:358},{axis:"February",value:351},{axis:"March",value:379},{axis:"April",value:418},{axis:"May",value:380},{axis:"June",value:360},{axis:"July",value:391},{axis:"August",value:414},	{axis:"September",value:379},{axis:"October",value:424},{axis:"November",value:337},{axis:"December",value:330}		
],[//Offence Against a Person
{axis:"January",value:274},{axis:"February",value:235},{axis:"March",value:287},{axis:"April",value:258},{axis:"May",value:303},{axis:"June",value:305},{axis:"July",value:283},{axis:"August",value:258},	{axis:"September",value:227},{axis:"October",value:248},{axis:"November",value:243},{axis:"December",value:233}
],[//Other Theft
{axis:"January",value:333},{axis:"February",value:318},{axis:"March",value:362},{axis:"April",value:348},{axis:"May",value:351},{axis:"June",value:308},{axis:"July",value:374},{axis:"August",value:402},	{axis:"September",value:333},{axis:"October",value:353},{axis:"November",value:389},{axis:"December",value:340}
],[//Theft of Bicycle
{axis:"January",value:069},{axis:"February",value:070},{axis:"March",value:135},{axis:"April",value:153},{axis:"May",value:183},{axis:"June",value:256},{axis:"July",value:271},{axis:"August",value:338},	{axis:"September",value:197},{axis:"October",value:162},{axis:"November",value:121},{axis:"December",value:079}
],[//Theft of Vehicle
{axis:"January",value:097},{axis:"February",value:090},{axis:"March",value:110},{axis:"April",value:089},{axis:"May",value:107},{axis:"June",value:115},{axis:"July",value:114},{axis:"August",value:103},	{axis:"September",value:107},{axis:"October",value:153},{axis:"November",value:111},{axis:"December",value:094}
],[//Vehicle Collision Or Pedestrian Struck
{axis:"January",value:127},{axis:"February",value:097},{axis:"March",value:106},{axis:"April",value:118},{axis:"May",value:133},{axis:"June",value:119},{axis:"July",value:152},{axis:"August",value:130},	{axis:"September",value:161},{axis:"October",value:144},{axis:"November",value:141},{axis:"December",value:160}
]];

///////// 2015
var data2015 = [
[//Theft from vehicle
{axis:"January",value:861},{axis:"February",value:722},{axis:"March",value:705},{axis:"April",value:780},{axis:"May",value:772},{axis:"June",value:719},{axis:"July",value:912},{axis:"August",value:823},	{axis:"September",value:853},{axis:"October",value:1033},{axis:"November",value:1215},{axis:"December",value:1151}
]		,[//Break and Enter
{axis:"January",value:434},{axis:"February",value:374},{axis:"March",value:432},{axis:"April",value:431},{axis:"May",value:457},{axis:"June",value:423},{axis:"July",value:430},{axis:"August",value:435},	{axis:"September",value:425},{axis:"October",value:486},{axis:"November",value:462},{axis:"December",value:500}
],[//Mischief
{axis:"January",value:522},{axis:"February",value:397},{axis:"March",value:411},{axis:"April",value:366},{axis:"May",value:419},{axis:"June",value:449},{axis:"July",value:492},{axis:"August",value:440},	{axis:"September",value:440},{axis:"October",value:525},{axis:"November",value:513},{axis:"December",value:604}		
],[//Offence Against a Person
{axis:"January",value:275},{axis:"February",value:212},{axis:"March",value:248},{axis:"April",value:222},{axis:"May",value:310},{axis:"June",value:298},{axis:"July",value:276},{axis:"August",value:269},	{axis:"September",value:243},{axis:"October",value:276},{axis:"November",value:303},{axis:"December",value:276}
],[//Other Theft
{axis:"January",value:390},{axis:"February",value:386},{axis:"March",value:387},{axis:"April",value:392},{axis:"May",value:407},{axis:"June",value:387},{axis:"July",value:420},{axis:"August",value:363},	{axis:"September",value:395},{axis:"October",value:403},{axis:"November",value:373},{axis:"December",value:380}
],[//Theft of Bicycle
{axis:"January",value:087},{axis:"February",value:090},{axis:"March",value:126},{axis:"April",value:187},{axis:"May",value:281},{axis:"June",value:410},{axis:"July",value:521},{axis:"August",value:437},	{axis:"September",value:340},{axis:"October",value:306},{axis:"November",value:156},{axis:"December",value:121}
],[//Vehicle Collision Or Pedestrian Struck
{axis:"January",value:121},{axis:"February",value:123},{axis:"March",value:132},{axis:"April",value:135},{axis:"May",value:144},{axis:"June",value:163},{axis:"July",value:150},{axis:"August",value:150},	{axis:"September",value:143},{axis:"October",value:135},{axis:"November",value:160},{axis:"December",value:127}
],[//Theft of Vehicle
{axis:"January",value:104},{axis:"February",value:076},{axis:"March",value:089},{axis:"April",value:084},{axis:"May",value:124},{axis:"June",value:105},{axis:"July",value:086},{axis:"August",value:115},	{axis:"September",value:139},{axis:"October",value:143},{axis:"November",value:164},{axis:"December",value:143}
]];
			


			// Chart Colors ////////////////////////// 
		
			var red = "#E57373";
			var pink = "#F06292";
			var purple = "#BA68C8";
			var blue = "#4DD0E1";
			var green = "#81C784";
			var yellow = "#FFF176";
			var brown = "#A1887F";
			var teal = "#4DB6AC";

			
			// Pass colors through range and add to variable to pass into radar function ////////////////////////// 

			var color = d3.scale.ordinal()
				.range([yellow, blue, green, pink, teal, brown, red,purple]);

				
			var radarChartOptions = {
			  maxValue: 1000,
			  color: color,
			  levels: 6,
			  roundStrokes: true,
			  margin: margin
			};	

			var radarChartOptions3 = { 
				maxValue: 850,
				color: color,
				margin: margin,
				roundStrokes: true
			};

			var radarChartOptions2 = {
			  maxValue: 900,
			  levels: 6,
			  roundStrokes: true,
			  color: color,
  			  margin: margin

			};

			//Call function to draw the Radar chart
			RadarChart(".radarChart2010", data2010, radarChartOptions);
			RadarChart(".radarChart2011", data2011, radarChartOptions2);
			RadarChart(".radarChart2012", data2012, radarChartOptions3);
			RadarChart(".radarChart2013", data2013, radarChartOptions2);
			RadarChart(".radarChart2014", data2014, radarChartOptions2);
			RadarChart(".radarChart2015", data2015, radarChartOptions2);

	