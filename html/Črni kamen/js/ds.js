//energija
let e1 = 0; //d_energija
let e1_maks = 1; //maks capaciteta
let e1_sec = 0; // energija na sekundo
let e2 = 0;//pretvorjenje energije
let e2_pre = 0.001; //conversion rate
//energija v nic
let e_nic = 0; //energija, ki je šla v nič
let e_big_bang = 1;
//material------------------
let m1 = 1;//črna snov
let m1_p = 0.01;//pasivno dobivanje energije
let m1_h = 0.004796;// hlapenje črne snovi 0.00069741;
let m2 = 0; // d_mat v pretvorbi
//wrapped matter
let wd_matter = 50;
//upgrades price------------------
let p1_cap = 1;
let p1_con = 0.1;
let p1_pre = 0.1;
//converting
let trn_gmb = document.getElementById("con_gmb");
let an_onf = 'off';
let t_chr = 0.0006974;
let t_fee = 0.001;
let t_fa = 0;
let interval = setInterval(paradoks,100);
//story<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var zg_list = ["Iskanje", "Začetek", "Obstoj", "Dimenzije", "Čas", "Naključje"];
var zg_bought = 1;
var p1_zg = 1;
//funkcije<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let timeout = 0;
function paradoks(){
//izpis
//izpis zgoraj
    document.getElementById("d_mat").innerHTML = m1.toFixed(2);
    document.getElementById("d_wrp").innerHTML = wd_matter.toFixed(2);
//izpis v nic    
    document.getElementById("vnic").innerHTML = e_nic.toFixed(2) + "/" + e_big_bang.toFixed(0);
//izpis obstoj 
    e1_sec =  (m1*m1_p)*0.42;
    document.getElementById("kmn_eng").innerHTML = e1.toFixed(2);
    document.getElementById("kmn_sec").innerHTML = e1_sec.toFixed(5) + "/sec";
    if(e2>=10 || e2==0){
        document.getElementById("ob_eng").innerHTML = e2.toFixed(0) + "/" + e1_maks.toFixed(0);
    }else{document.getElementById("ob_eng").innerHTML = e2.toFixed(2) + "/" + e1_maks.toFixed(0);}
    if(m2>=10 || m2==0){
        document.getElementById("ob_mat").innerHTML = m2.toFixed(0);;
    }else{document.getElementById("ob_mat").innerHTML = m2.toFixed(2);}
    //_-------
    document.getElementById("maks_enr").innerHTML = e1_maks.toFixed(2);
    document.getElementById("maks_enr_af").innerHTML = (e1_maks*2).toFixed(2);
    document.getElementById("maks_enr_p").innerHTML = p1_cap.toFixed(2);
    //--------
    document.getElementById("con_rt").innerHTML = e2_pre.toFixed(3);
    document.getElementById("con_rt_af").innerHTML = (e2_pre*2).toFixed(3);
    document.getElementById("con_rt_p").innerHTML = p1_con.toFixed(2);
    document.getElementById("con_pre").innerHTML = t_chr.toFixed(3);
    document.getElementById("con_pre_af").innerHTML = (t_chr*2).toFixed(3);
    document.getElementById("con_pre_p").innerHTML = p1_pre.toFixed(1);
//klic funkcij
    item_izpis();
    conversion();
    if(timeout>42){
        timeout = 0;
        sv_auto();
        passive();
        vesolje_time();
        big_bang();
    }else{
        timeout++;
    }
}
//once izpiz
function passive(){
    //passive
    if(e1 >= 0){
        e1 += (m1 * m1_p);
    }else{e1 = 0;}
    //hlapenje
    if(m1 >0){
        m1 = m1 - (m1 * m1_h);
        e_nic += (m1 * m1_h);
    }
}
function conversion(){
    if(an_onf === 'on'){
        if(e2 > 0){
            e2 = e2 - e2_pre;
            m2 =  m2 + e2_pre;
        }else{
            e2 = 0;
            transfer();
        }
    }else if(an_onf ==='charge'){
        if(e1 > 0){
            e2 = e2 + t_chr;
            e1 = e1 - t_chr;
            if(e2 > e1_maks){
                e2 = e1_maks;
                an_onf = 'on';
                trn_gmb.style.animation ="paused";
                trn_gmb.style.animation ="converting 1s infinite";
            }
        }
        if(e1 <= 0){
            e1 = 0;
            an_onf = 'on';
            trn_gmb.style.animation ="paused";
            trn_gmb.style.animation ="converting 1s infinite";
            t_fa = 0;
        }
    }
}
function pret(){
    if(an_onf === 'off' && e1 > t_fee){
        an_onf = 'charge';
        t_fa = t_fee* e1;
        e1 = e1 - t_fa;
        e_nic = e_nic 
         trn_gmb.style.animation ="spin 1s infinite";
    }else if(an_onf === 'charge'){
        an_onf= 'on';
        trn_gmb.style.animation ="paused";
        trn_gmb.style.animation ="converting 1s infinite";
        return;
    }else{
        return;
    }
}
function transfer(){
    an_onf = 'off';
        if(m2>0){
                wd_matter = wd_matter + m2;
                m2 = 0;
                e1 += e2;
                e2 = 0;
        }else{m2=0;}
        trn_gmb.style.animation ="paused";
}
function up_cap(){
    if(wd_matter>=p1_cap){
        wd_matter -= p1_cap;
        p1_cap *= 1.618;
        e1_maks *= 2;
    }
}
function up_con(){
    if(wd_matter>=p1_con){
        wd_matter -= p1_con;
        p1_con *= 2.14;
        e2_pre *= 2;
    }
}
function up_pre(){
    if(wd_matter>=p1_pre){
        wd_matter -= p1_pre;
        p1_pre *= 3.796;
        t_chr *= 2;
    }
}
function unwprap_matter(z_mw){
    z_mw =  parseFloat(z_mw);
    if(z_mw > wd_matter){
        z_mw = wd_matter;
    }
    if(z_mw <= wd_matter){
        wd_matter -= z_mw;
        m1 +=z_mw;
        z_mw = 0;
    }
}
//show hide stuff
let unw_state = false;
let unw_drop = document.getElementById("unw_drop_pick");
function unw_show(){
    if(unw_state == false){
        unw_state = true;
        unw_drop.style.display = "block";        
    }else{
        unw_state = false;
        unw_drop.style.display = "none";
        
    }
}
//story stuff
let zgd_buttons  =document.getElementById("zgd_sh_buttons");
let zgd_state = false;
function zg_show(){
    if(zgd_state == false){
        zgd_state = true;
        zgd_buttons.style.display  = "block";
    }else{
        zgd_state = false;
        zgd_buttons.style.display  = "none";
    }
}
let up_show_content =document.getElementById("upgrade");
let up_state = false;
function up_show(){
    if(up_state == false){
        up_state = true;
        up_show_content.style.display  = "block";
    }else{
        up_state = false;
        up_show_content.style.display  = "none";
    }
}
function zg_create(){
    for( z = 0; z <= zg_bought; z++){
        if(z === zg_bought){
            zg_add();   
        }else{
            var zg_a = document.createElement("a");
            zg_a.setAttribute("class", "modb_zg");
            zg_a.setAttribute("id", "zgd"+ z);
            zg_a.setAttribute("onclick", "zg_link("+z+")");
            zg_a.innerHTML = zg_list[z];
            zgd_buttons.appendChild(zg_a);            
        }
    }
}
zg_create();
function zg_buy(){
    if(zg_bought< zg_list.length){
        if(wd_matter>= p1_zg){
            wd_matter -= p1_zg;
            p1_zg++;
            zg_bought++;
            var zgbb_rmv = document.getElementById("zg_bb");
            var zgbbtxt_rmv = document.getElementById("zg_bb_text");
            zgbb_rmv.remove();
            zgbbtxt_rmv.remove();
            var zg_a = document.createElement("a");
            zg_a.setAttribute("class", "modb_zg");
            zg_a.setAttribute("id", "zgd"+ (zg_bought-1));
            zg_a.setAttribute("onclick", "zg_link("+ (zg_bought-1) + ")");
            zg_a.innerHTML = zg_list[zg_bought-1];
            zgd_buttons.appendChild(zg_a);
            if(zg_bought<zg_list.length){
                zg_add();
            }    
        }
    }
}
function zg_add(){
    if(zg_bought<zg_list.length){
        var zg_bb = document.createElement("a");
        zg_bb.setAttribute("class", "modb_zg_add");
        zg_bb.setAttribute("id", "zg_bb");
        zg_bb.setAttribute("onclick", "zg_buy()");
        zgd_buttons.appendChild(zg_bb);
        var zg_bb_text = document.createElement("a");
        zg_bb_text.setAttribute("id", "zg_bb_text");
        zg_bb_text.innerHTML = "Novo poglavje: ";
        var p1zg_a = document.createElement("a");
        p1zg_a.setAttribute("id", "zg_izpis");
        p1zg_a.innerHTML = p1_zg;
        zg_bb_text.appendChild(p1zg_a);
        var zg_img = document.createElement("IMG");
        zg_img.setAttribute("src", "Slike/wraped_DM.png");
        zg_img.setAttribute("height", "25");
        zg_bb_text.appendChild(zg_img);
        zg_bb.appendChild(zg_bb_text); 
    }
}
document.getElementById("zg_izpis").innerHTML = p1_zg;
function zg_link(chapter){
    let zg_frame = document.getElementById("frame_story");
    zg_frame.src = "story/" + zg_list[chapter] + ".html";
    zgd_buttons.style.display  = "none";
    zgd_state = false;
}
//change converting icon
//save====================================================
function call_storage(){
    if(confirm("Ali hočeš shraniti?") === true){
        storage();
    }
}
function storage(){
        localStorage.setItem("e1", e1);
        localStorage.setItem("e1_maks", e1_maks);
        localStorage.setItem("e2", e2);
        localStorage.setItem("e2_pre", e2_pre);
        localStorage.setItem("m1", m1);
        localStorage.setItem("m1_p", m1_p);
        localStorage.setItem("m1_h", m1_h);
        localStorage.setItem("m2", m2);
        localStorage.setItem("wd_matter", wd_matter);
        localStorage.setItem("p1_cap", p1_cap);
        localStorage.setItem("p1_con", p1_con);
        localStorage.setItem("p1_pre", p1_pre);
        localStorage.setItem("t_chr", t_chr);
        localStorage.setItem("t_fa", t_fa);
        localStorage.setItem("an_onf", an_onf);
        localStorage.setItem("zg_bought", zg_bought);
        localStorage.setItem("p1_zg", p1_zg);
        localStorage.setItem("e_nic", e_nic);
}
function call_load(){
    if(confirm("Naloži shranjeno igro?") === true){
        load();
    }
}
function load(){
        e1=Number(localStorage.getItem("e1"));
        e1_maks=Number(localStorage.getItem("e1_maks"));
        e2=Number(localStorage.getItem("e2"));
        e2_pre=Number(localStorage.getItem("e2_pre"));
        m1=Number(localStorage.getItem("m1"));
        m1_p=Number(localStorage.getItem("m1_p"));
        m2=Number(localStorage.getItem("m1_h"));
        wd_matter=Number(localStorage.getItem("wd_matter"));
        p1_cap=Number(localStorage.getItem("p1_cap"));
        p1_con=Number(localStorage.getItem("p1_con"));
        p1_pre=Number(localStorage.getItem("p1_pre"));
        t_chr=Number(localStorage.getItem("t_chr"));
        t_fa=Number(localStorage.getItem("t_fa"));
        zg_bought=Number(localStorage.getItem("zg_bought"));
        p1_zg=Number(localStorage.getItem("p1_zg"));
        an_onf=localStorage.getItem("an_onf");
        e_nic=localStorage.getItem("e_nic");
    zgd_buttons.innerHTML = "";
    zg_create();
    alert("Naloženo!");
}
function sv_auto(){
    sve_ch = document.getElementById("sve_check").checked;
    if(sve_ch === true){
        storage();
        console.log("save");
    }
}
//vesolje
let space_st = 1;
let space_oc = [
    []
];
let ves_id = document.getElementById("vesolje");
for(i=0; i < space_st;i++){
    space_oc[i] =  ["empty", "none", 0, 0];
    vesolje_space(i);
}
console.log(space_oc);
let items = [
    ["black_hole", 0, 10],// item, st_item
    ["sun", 0]
];
function big_bang(){
    if(e_nic>=e_big_bang){
        space_st++;
        e_big_bang = e_big_bang*100;
        space_oc[space_st-1] =  ["empty", "none", 0, 0];
        vesolje_space(space_st -1);
    }
}
function vesolje_space(ves_z_st){
    var crt_space = document.createElement("DIV");
    crt_space.setAttribute("class", "vesolje_el");
    crt_space.setAttribute("id", "space" + ves_z_st);
    crt_space.setAttribute("onclick", "vesolje_click(" + ves_z_st + ")");
    ves_id.appendChild(crt_space);
}
let item_id = document.getElementById("inven");
crt_items();
function crt_items(){
    for(i=0; i< items.length;i++){
        var crt_itm = document.createElement("DIV");
            crt_itm.setAttribute("class", "inven_el");
            crt_itm.setAttribute("id", "item" + i);
            crt_itm.setAttribute("onclick", "inven(" + i + ")");
        item_id.appendChild(crt_itm);
    }
}
function item_izpis(){
    for(i=0; i< items.length;i++){
        document.getElementById("item" + i). innerHTML = items[i][1].toFixed(0);
    }
}
let c_item = "none";
function inven(item){
    switch (item){
        case 0:
            if(c_item === "black_hole"){
                c_item = "none";
                document.body.style.cursor = "default";
                break;
            }else if(wd_matter>=10){
                document.body.style.cursor = "cell";
                c_item = "black_hole";
                break; 
            }
    }
}
function vesolje_click(id_ves){
    document.body.style.cursor = "default";
    if(space_oc[id_ves][0] === "empty"){
    switch (c_item){
        case "black_hole":
            wd_matter -=10;
            c_item = "none";
            space_oc[id_ves][0] = "exist";
            space_oc[id_ves][1] = items[0][0];
            space_oc[id_ves][2] = items[0][2];
            document.getElementById("space" + id_ves).innerHTML = space_oc[id_ves][3];
        }
    }else if(space_oc[id_ves][0] === "done"){
            collect_vesolje(id_ves);   
    }
}
function vesolje_time(){
    for(i=0;i<space_oc.length; i++){
        if(space_oc[i][0] === "exist"){
            space_oc[i][3]++;
            document.getElementById("space" + i).innerHTML = space_oc[i][3];
            if(space_oc[i][3] === space_oc[i][2]){
                space_oc[i][0] = "done";
                document.getElementById("space" + i).innerHTML = "Formed";
            }
        }
    } 
}
function collect_vesolje(id_ves_rst){
    for(i=0; i<items.length;i++){
        if(items[i][0] === space_oc[id_ves_rst][1]){
            items[i][1]+= 1;
            space_oc[id_ves_rst][0] = "empty";
            space_oc[id_ves_rst][1] = "none";
            space_oc[id_ves_rst][2] = 0;
            space_oc[id_ves_rst][3] = 0;
            document.getElementById("space" + id_ves_rst).innerHTML = space_oc[id_ves_rst][3];
        }
    }
}