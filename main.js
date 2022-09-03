    var name = "Kotnik Miha";
// Stran ustvari vsebino glede na informacije v tem array-u
//file formats .pdf, .jpg, .hmtl, empty for special manual
    var project = [
        ["Info", 1, "download/Info.html"],
        ["Življenjepis", 1, ".pdf"],
        ["Primer", 2, ".pdf"],
        ["PrimerSLK", 2, ".jpg"],
        ["Chopie", 1, ".html"],
        ["TRInity", 1, ".html"],
        ["Črni kamen", 1, ".html"],

    ];
//code==================================================================
    function create_site(){
//get ID
        var id_meni = document.getElementById("meni");
        var id_author_button = document.getElementById("author_button_position");
        var id_modal_all = document.getElementById("modal");
//for loop creatinh elements
        for(var i = 0; i < project.length; i++){
//set attributes
//create modal button
            var crt_a_button = document.createElement("a");
            crt_a_button.setAttribute("class", "modb");
            crt_a_button.setAttribute("id", "modb" + i);
            crt_a_button.setAttribute("href", "#openModal" + i);
            var crt_div_button = document.createElement("DIV");
            if(project[i][0] == "Authors" || project[i][0] == "Info"){
                crt_div_button.setAttribute("class", "button_author");
                id_author_button.appendChild(crt_a_button);
            }else{
                crt_div_button.setAttribute("class", "button_meni");
                id_meni.appendChild(crt_a_button);
            }
            crt_div_button.innerHTML = project[i][0];
            crt_a_button.appendChild(crt_div_button);
//create modal
            var crt_div_modal = document.createElement("DIV");
            crt_div_modal.setAttribute("class", "modalDialog");
            crt_div_modal.setAttribute("id", "openModal" + i);
            id_modal_all.appendChild(crt_div_modal);
//create modal content
            var crt_div_content = document.createElement("DIV");
            crt_div_content.setAttribute("class", "modal_content");
            crt_div_content.setAttribute("id", project[i][0]);
            crt_div_content.innerHTML = "";
            crt_div_modal.appendChild(crt_div_content);
//get id of modal
            var id_modal_content = document.getElementById(project[i][0]);        
//create author modal content
            if(project[i][0] == "Authors" || project[i][0] == "Info"){
                var crt_iframe_author = document.createElement("IFRAME");
                crt_iframe_author.setAttribute("src", project[i][2]);
                crt_iframe_author.setAttribute("id", "frame_author");
                id_modal_content.appendChild(crt_iframe_author);
            }else{
                for(var y=0; y < project[i][1]; y++){
                    var filename0 = "_000";
                    if(y>9){
                        filename0 = "_00";
                    }else if(y> 99){
                        filename0 = "_0";
                    }else if(y>999){
                        filename0 = "_";
                    }
                if(project[i][2] == ".html"){
                    var crt_iframe_html = document.createElement("iframe");
                    crt_iframe_html.setAttribute("class", "frame_html");
                    crt_iframe_html.setAttribute("id", "frame_html" + i);
                    crt_iframe_html.setAttribute("src", "html/" + project[i][0] +"/" + project[i][0] + project[i][2]);
                    id_modal_content.appendChild(crt_iframe_html);
                }else{
//download div container                    
                    var crt_div_download = document.createElement("DIV");
                    crt_div_download.setAttribute("class", "downloads");
                    crt_div_download.innerHTML = "";
                    id_modal_content.appendChild(crt_div_download);
//icon slike                    
                    var crt_img = document.createElement("IMG");
                    if(project[i][0] == "Življenjepis"){
                        crt_img.setAttribute("src", "cover_slika/CV.jpg");
                    }else if(project[i][2] == ".jpg"){
                        crt_img.setAttribute("src", "download/" + project[i][0] + "_logo" + project[i][2]);
                    }
                    
                    else{
                        crt_img.setAttribute("src", "cover_slika/default.jpg");
                    }
                    crt_img.setAttribute("width", "150px");
                    crt_div_download.appendChild(crt_img);
//title                    
                    var crt_p_download = document.createElement("p");
                    crt_p_download.setAttribute("class", "downloads_title");
                    crt_p_download.innerHTML = project[i][0] + filename0 + y + project[i][2] ;
                    crt_div_download.appendChild(crt_p_download);
//download link                    
                    var crt_a_download = document.createElement("a");
                    crt_a_download.setAttribute("class", "button_download")
                    crt_a_download.setAttribute("id", project[i][0] + filename0 + y);
                    crt_a_download.setAttribute("href", "download/" + project[i][0] + filename0 + y + project[i][2]);
                    crt_a_download.setAttribute("download", "");
                    crt_a_download.setAttribute("target", "_blank");
                    crt_a_download.innerHTML = "Open";
                    crt_div_download.appendChild(crt_a_download);  
                }   
                }
            }
        }
    }
//meni show hide
    var check_meni = false;
    var fit_screen = window.matchMedia("(max-width: 1000px)")
    function min_max(){
    var meni_onoff = document.getElementById("meni_show");
    console.log(check_meni);
    if(check_meni == true){
        check_meni = false;
        document.getElementById("meni").style.display = "none";
        meni_onoff.innerHTML = "&#8801;";
        
    }
    else{
        check_meni = true;
        document.getElementById("meni").style.display = "block";
        meni_onoff.innerHTML = "X";
    }
}
//display
    function top_izpis(){
   document.getElementById("name").innerHTML = name; 
   document.getElementById("title").innerHTML = name; 
}
//klic funkcij enkrat
    create_site();
    top_izpis();
    document.getElementById("modb0").click();