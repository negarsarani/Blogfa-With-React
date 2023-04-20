import React from 'react';
import Button from '../../components/shared/Button';
import Textfield from '../../components/shared/Textfield';

const Header = () => {
  return (
    <div className="w-full">
      <div className="hidden xl:block">icon</div>
      <div className="flex flex-col items-center justify-center ">
        <div className=" bg-[#5B5BFF]  text-sm p-5 px-7  pt-10 flex flex-col gap-4 items-center justify-center pb-7">
          <p className="text-center text-white">
            بلاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است . بلاگفا به شما
            کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب و مقالات خود
            را در اینترنت منتشر کنید
          </p>
          <Button style="text-white bg-[#0101AA] py-1 px-2">
            ثبت نام و ایجاد وبلاگ جدید
          </Button>
        </div>
        <div className="bg-[#F0F0F0] px-3 py-2 flex flex-col items-center justify-center text-sm w-full gap-5">
          <form className="flex flex-col gap-2 w-full">
            <Textfield placeholder="نام کاربری" type="text" />
            <Textfield placeholder="رمز عبور" type="password" />
            <Button style="bg-[#5B5BFF] text-white p-2 ">
              ورود به بخش مدیریت وبلاگ
            </Button>
          </form>
          <a className="text-[.8rem] py-4 pb-5 px-6">
            کلمه عبور خود را فراموش کردم
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
