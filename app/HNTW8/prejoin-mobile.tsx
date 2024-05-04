/* eslint-disable @next/next/no-img-element */
"use client";

import { useTransition } from "react";
import { assertPeer } from "~/actions";
import { useStore } from "~/app/HNTW8/store";

export function Mobile() {
  return (
    <div className="meet-pending">
      <div className="meet-container h-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="meet-header">
      <div className="meet-back">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          color="white"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "white" }}
        >
          <path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" />
        </svg>
      </div>
      <div className="meet-right">
        <div className="meet-avater">
          <img
            src="/avatar-placeholder.png"
            alt=""
            className="h-10 w-10 rounded-full object-fill aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

function Main() {
  const [isPending, startTrasition] = useTransition();
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);
  const setJoined = useStore((state) => state.setJoined);

  function onJoin() {
    if (name.length === 0) {
      alert("Bạn cần nhập tên để vào phòng.");
      return;
    }

    startTrasition(() => {
      return assertPeer(name);
    });

    setJoined(true);
  }

  return (
    <div className="meet-modal-mobile">
      <div className="h-full">
        <div className="meet-modal-head">
          <div className="meet-head-left">
            <h3 className="mb-1">
              HỘI NGHỊ TOÀN QUỐC NGHIÊN CỨU, HỌC TẬP, QUÁN TRIỆT NGHỊ QUYẾT HỘI
              NGHỊ LẦN THỨ TÁM BAN CHẤP HÀNH TRUNG ƯƠNG ĐẢNG KHÓA XIII
            </h3>
            <div className="meet-head-info">
              <span className="meet-head-id">ID: 20236666</span>
              <span className="meet-head-border"> </span>
              <span className="text-white mr-0.5 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height={15}
                  width={15}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </span>
              <p className="mb-0 meet-head-user">{name}</p>
            </div>
          </div>
        </div>
        <div className="meet-background camera-off">
          <div className="meet-avatar-name false">
            <div className="meet-avatar-box">
              <div
                className="meet-avatar-image"
                style={{
                  backgroundImage: 'url("/avatar-placeholder.png")',
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <p className="text-white mb-2 w-[83%] text-center">
              Yêu cầu nhập tên tỉnh/thành phố hoặc đơn vị đang công tác
            </p>
            <div className="meet-user-name">
              <input
                type="text"
                className="w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="meet-action">
          <div className="meet-action-box w-full">
            <button
              className="meet-action-join bg-gray-400"
              onClick={onJoin}
              disabled={isPending}
            >
              <img src="/iconphone.svg" alt="" />
              {isPending ? <span>Đang xử lý </span> : <span>Tham gia</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
