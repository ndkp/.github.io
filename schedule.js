 document.addEventListener('DOMContentLoaded', function() {

    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'ja',
      height: 'auto',
      firstDay: 0,
      headerToolbar: {
        left: "dayGridMonth,listMonth",
        center: "title",
        right: "today prev,next"
      },
      buttonText: {
        today: '今月',
        month: '月',
        list: 'リスト'
      },
    });
    //キャンバスにレンダリング
    calendar.render();
    
    // ①GoogleカレンダーのAPIキーを設定
      googleCalendarApiKey: 'AIzaSyBCSlo5E13JaKg_1T6bNeOVfHXC7DWdG-A',

    // ②カレンダーIDを設定
      events: 'info.hipericum@gmail.com',
      
      views: {
        dayGridMonth: {
          titleFormat: { year: 'numeric', month: 'numeric' },
        },
        listMonth: {
          titleFormat: { year: 'numeric', month: 'numeric' },
          listDayFormat: { month: 'numeric', day: 'numeric', weekday: 'narrow' },
          listDaySideFormat: false
        }
      },
  });
