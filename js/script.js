function countDown() {
   const days = document.querySelector("#days");
   const hours = document.querySelector("#hours");
   const minutes = document.querySelector("#minutes");
   const seconds = document.querySelector("#seconds");

   const endTime = Date.parse("february 1, 2023 00:00:00");
   const todayDate = new Date();
   const diff = endTime - todayDate;

   const daysMath = Math.floor(diff / (1000 * 60 * 60 * 24));
   const hoursMath = Math.floor(diff / (1000 * 60 * 60));
   const minsMath = Math.floor(diff / (1000 * 60));
   const secsMath = Math.floor(diff / 1000);

   const d = daysMath;
   const h = hoursMath - daysMath * 24;
   const m = minsMath - hoursMath * 60;
   const s = secsMath - minsMath * 60;

   days.innerHTML = d;
   hours.innerHTML = h;
   minutes.innerHTML = m;
   seconds.innerHTML = s;

   let timeId = setTimeout(countDown, 500);

   if (endTime <= todayDate) {
      clearTimeout(timeId);
      days.innerHTML = "0";
      hours.innerHTML = "0";
      minutes.innerHTML = "0";
      seconds.innerHTML = "0";
   }
}

setTimeout(countDown, 500);
