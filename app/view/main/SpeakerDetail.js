/**
 * Speaker detail view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.SpeakerDetail', {
    extend : 'Ext.tab.Panel',
    xtype : 'speakerdetail',
    ui : 'speakers-tabs',
    reference : 'speakerdetail',
    tabBarPosition : 'bottom',
    items : [
        {
            title : 'Bio',
            iconCls : 'x-fa fa-graduation-cap',
            tpl : '<span style="background-color:#434343; display:inline-block; width: 100% "><font style=" color: #DEBE1C;font-weight:900;font-size:18px;margin:10px;">{name}</font><br />'+
            '<font style="color:#BDA01B;margin:10px;">{job_title}</font></span>'+
            '<hr /><font style="padding:10px;display:block">{bio}</font>',
            itemId : 'bioCard',
            reference : 'bioCard'
        },
        {
            title : 'Session',
            iconCls : 'x-fa fa-bell-o',
            tpl : '<span style="background-color:#434343; display:inline-block; width: 100% "><font style="color:#DEBE1C;font-weight:900;font-size:18px;margin:10px;">{session_title}</font><br />'+
            '<font style="color:#BDA01B;margin:10px;">By {name}</font></span>'
            +'<hr /><font style="padding:10px;display:block">{session_description}</font>',
            itemId : 'sessionCard',
            reference : 'sessionCard'
        }
    ]
})
