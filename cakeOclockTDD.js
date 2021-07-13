// Add the 'outside of working hours' test here
it('doesnot provide options ouside working hours',()=>{
    const earlyHour='7:00'
    const lateHour = '1:00'
    browser.url('/')
    const html = browser.getHTML('Body');
    const parseTest = parseTextFromHtml(HTML,'#select-pickup')
    asset.notinclude(parsedHtml,earlyHour)
  asset.notinclude(parsedHtml,lateHour)
  })

 //Add the 'displays the selected hour' test here
  it('doesnot display time properly',()=>{
const Hour='#:00'
browser.url('/')
browser.selectByVisibleText('#select-pickup',hour);
browser.selectByVisibleText('#submit-order');
browser.url('/')

asset.include(browser.getText('pickup',hour))
asset.include(parsedHtml,lateHour)
})