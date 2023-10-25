import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabase = createClient('https://eygywrlkufqmaatfxqxh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5Z3l3cmxrdWZxbWFhdGZ4cXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3NTI4NzcsImV4cCI6MjAxMzMyODg3N30.hBJynVYgDSZP4rbV6yGnt9sJEbHUErEKrLe7Hs7DsBE')

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('access_token');

const message = document.getElementById("message");
const spinner = document.getElementById("spinner");
const text = document.getElementById("text");
const waiting = document.getElementById("ww");

fetchData()


async function fetchData() {
    try {
    const response = await supabase.auth.verifyOtp({ token_hash: token, type: 'email'});
    if (!response.ok) {
        message.innerText = "لقد حدث خطأ ما : " + error;
        spinner.style.display = "none";
        text.style.display = "none";
    }else{
        message.innerText = "لقد تم تفعل حسابك بنجاح. يمكنك الآن تسجيل دخولك إلى حسابك. شكرا";
        spinner.style.display = "none";
        text.style.display = "none";
    }
    } catch (error) {
        message.innerText = "لقد حدث خطأ ما : " + error;
        spinner.style.display = "none";
        //text.style.display = "none";
    }
  }