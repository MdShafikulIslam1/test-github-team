import React from "react";

const GitConflict = () => {
  return (
    <div>
      hey brother how are you. hope u doing weel
      <p>fahim vai kharap </p>
      <p>
        "Require approval of the most recent reviewable push" এই বৈশিষ্ট্যটি
        ব্যবহার করতে, নতুন কোড পুশ করার আগে, অন্য কেউ সেই পুশে রিভিউ করে এবং
        অনুমোদন দেয়া প্রয়োজন। এটি মূলত একটি সুরক্ষিত প্রক্রিয়া হিসেবে কাজ করে
        এবং তা নির্ধারণ করে যে একজন ডেভেলপার নিজের কোড পুশ করতে পারবে না, তাকে
        অন্য কেউ রিভিউ করতে হবে। এটি টীমের মধ্যে কোড কোয়ালিটি এবং সিকিউরিটি
        বৃদ্ধির জন্য একটি ভাল অভ্যন্তরীণ নীতি হতে পারে। এই বৈশিষ্ট্যটি ব্যবহার
        করার জন্য প্রয়োজনীয় পদক্ষেপগুলি নিন: নতুন ব্রাঞ্চ তৈরি করুন: আপনার
        লোকাল main ব্রাঞ্চ থেকে একটি নতুন ব্রাঞ্চ তৈরি করুন। এই নতুন ব্রাঞ্চে
        আপনার পরিবর্তন করুন। নতুন ব্রাঞ্চটি রিমোট রিপোজিটরিতে পুশ করুন। main
        ব্রাঞ্চে মার্জ করার জন্য একটি পুল রিকোয়েস্ট তৈরি করুন। অনুমোদন পরীক্ষা
        করুন: রিপোজিটরি সেটিংস চেক করুন, স্পষ্টভাবে main ব্রাঞ্চের জন্য ব্রাঞ্চ
        প্রটেকশন সেটিংস যাচাই করুন। নির্দিষ্ট অনুমোদন পরীক্ষা করুন যে
        পরিবর্তনগুলির জন্য পুল রিকোয়েস্ট করা হয়। অনুমোদনকারীদের সাথে যোগাযোগ
        করুন: আপনি এখনো সমস্যা হয় তাদের সাথে যোগাযোগ করুন অথবা রিপোজিটরি
        ম্যানেজারদের অনুরোধ করুন যে বিশেষ কোন সীমার জন্য তাদের কনফিগার করা আছে
        কিনা। এই ধাপগুলি মাধ্যমে আপনি এই অভিযান্ত্রিত ফীচাটি ব্যবহার করতে সক্ষম
        হবেন।
      </p>
    </div>
  );
};

export default GitConflict;
