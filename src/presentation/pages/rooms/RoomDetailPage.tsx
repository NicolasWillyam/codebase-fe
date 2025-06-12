import {
  useGetHomestayByIdQuery,
  useGetHomestaysQuery,
} from "@/features/homestay/api/homestayApi";
import { HotelCard } from "@/presentation/components/cards/HotelCard";
import { SearchBar } from "@/presentation/components/searchs/SearchBar";
import { SearchRoomBar } from "@/presentation/components/searchs/SearchRoomBar";
import { Button } from "@/presentation/components/ui/button";
import { FilterTabs } from "@/presentation/filters/FilterTabs";
import { Bell, Heart, Scroll, Share, ShoppingBag, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/presentation/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/presentation/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const filters = [
  "Khách sạn",
  "Vé máy bay",
  "Vé xe khách",
  "Đưa đón sân bay",
  "Cho thuê xe",
  "Vui chơi & Giải trí",
];

const RoomDetailPage = () => {
  const [showFilter, setShowFilter] = useState(true);
  //   const { data, isLoading, error } = useGetHomestaysQuery({});
  const { id } = useParams();

  // Use the specific query for a single homestay by ID
  const { data: homestayData, isLoading, error } = useGetHomestayByIdQuery(id);

  // Log the fetched data for debugging
  useEffect(() => {
    console.log("Homestay Data:", homestayData);
    if (error) {
      console.error("Error fetching homestay:", error);
    }
  }, [homestayData, error]);

  console.log(homestayData);

  useEffect(() => {
    const handleScroll = () => {
      setShowFilter(window.scrollY < 50); // Ẩn nếu cuộn quá 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!homestayData) return null;
  return (
    <>
      <div className="w-full h-auto transition-all duration-300 border-b bg-white fixed z-10 top-0 py-2 pb-4">
        <div className="max-w-[1380px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/icons/logo.png" alt="" width={50} />
            <p className="text-xl font-medium tracking-tight -mb-2 -ml-1">
              gomore
            </p>
          </div>
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full h-9 w-9"
            >
              <User />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full h-9 w-9"
            >
              <Heart />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full h-9 w-9"
            >
              <Bell />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full h-9 w-9"
            >
              <ShoppingBag />
            </Button>
          </div>
        </div>
        <div className="-mt-10">
          <div
            className={`
                transition-all duration-300 ease-in-out overflow-hidden
                ${showFilter ? "max-h-[60px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="flex gap-2 flex-wrap justify-center mb-4">
              {filters.map((item, i) => (
                <Button
                  key={i}
                  size={"sm"}
                  variant={item === "All" ? "default" : "ghost"}
                  className={
                    item === "All"
                      ? "bg-foreground rounded-full px-4"
                      : "bg-foreground/5 rounded-full px-4"
                  }
                >
                  <p className="text-sm">{item}</p>
                </Button>
              ))}
            </div>
          </div>

          <SearchRoomBar zoomIn={false} />
        </div>
      </div>
      <section className="min-h-screen max-w-[1380px] mx-auto px-10 bg-center bg-no-repeat bg-cover space-y-6 py-40">
        <div className="w-full flex justify-between">
          <p className="text-[25px] font-medium">{homestayData.data.name}</p>
          <div className="flex items-center gap-2">
            <Button variant={"ghost"} size={"sm"}>
              <Share /> <p>Share</p>
            </Button>
            <Button variant={"ghost"} size={"sm"}>
              <Heart /> <p>Save</p>
            </Button>
          </div>
        </div>
        <Sheet>
          <SheetTrigger>
            {" "}
            <div className="flex gap-2">
              <img
                src={homestayData.data.images[0]}
                className="w-1/2 aspect-[3/2] bg-gray-100 rounded-l-2xl object-cover object-center"
              />
              <div className="w-1/2 grid grid-cols-2 gap-2">
                <img
                  src={homestayData.data.images[1]}
                  className="w-full aspect-[3/2] object-cover object-center bg-gray-100 "
                />
                <img
                  src={homestayData.data.images[2]}
                  className="w-full aspect-[3/2] object-cover object-center bg-gray-100 rounded-tr-2xl"
                />
                <img
                  src={homestayData.data.images[3]}
                  className="w-full aspect-[3/2] object-cover object-center bg-gray-100"
                />
                <img
                  src={homestayData.data.images[4]}
                  className="w-full aspect-[3/2] object-cover object-center bg-gray-100 rounded-br-2xl"
                />
              </div>
            </div>
          </SheetTrigger>
          <SheetContent className="sm:max-w-screen p-6 px-8 pr-0 pb-0">
            <div className="">
              <p className="text-[22px] font-semibold">
                {homestayData.data.name}
              </p>
              <p className="text-[15px] text-foreground/60">
                {homestayData.data.description}
              </p>
            </div>
            <ScrollArea className="overflow-auto pb-20 pt-4 space-y-4">
              {homestayData.data.images.map((img) => (
                <img
                  key={img}
                  src={img}
                  className="max-w-3xl mx-auto aspect-[3/2] bg-gray-100 object-cover object-center"
                />
              ))}
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <div className="w-full flex">
          <div className="w-3/5 space-y-8">
            <div className="">
              <p className="text-[21px] font-medium">
                {homestayData.data.description}
              </p>
              <p className="text-[15px] text-foreground/80">
                {homestayData.data.rooms.hasLivingRoom ? "1" : "Không"} phòng
                khách - {homestayData.data.rooms.hasLivingRoom ? "1" : "Không"}{" "}
                phòng bếp - {homestayData.data.rooms.bedroomCount} phòng ngủ -{" "}
                {homestayData.data.rooms.bathroomCount} phòng tắm
              </p>
              <p className="text-[15px] font-medium">
                5,0 -{" "}
                <span className="underline underline-offset-1">23 reviews</span>
              </p>
            </div>
            <hr />
            <div className="space-y-6">
              <div className="flex items-start gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "24px",
                    width: "24px",
                    fill: "currentcolor",
                  }}
                >
                  <path d="m15.59 1.91 1.02.8C22.17 7.04 25 11.46 25 15.98a8.99 8.99 0 0 1-.5 3.02H31v2h-2v9a1 1 0 0 1-.88 1H4a1 1 0 0 1-1-.88V21H1v-2h6.42c-.28-.9-.42-1.91-.42-3.01 0-2.25 1.1-4.82 3.27-7.75l.27-.35.55-.73 1.78 1.12L15.6 1.9zM27 21H5v8h22v-8zM16.4 5.1l-2.6 6.1-2.21-1.37-.17.24C9.87 12.3 9.07 14.2 9 15.77l-.01.21c0 1.1.17 2.04.48 2.85l.07.17h3a6.1 6.1 0 0 1-.05-.83c0-1.52.86-3.19 2.52-5.07l.24-.27.74-.81.74.8c1.82 2 2.76 3.76 2.76 5.35 0 .3-.02.57-.05.83h3.06l-.14-.07a6.7 6.7 0 0 0 .63-2.95c0-3.42-2.03-6.93-6.17-10.51l-.43-.36zm-.4 9.94-.08.1c-.9 1.14-1.36 2.11-1.41 2.88l-.01.15c0 .35.03.63.09.83h2.82c.06-.2.09-.48.09-.83 0-.79-.46-1.8-1.42-3.04l-.08-.1z"></path>
                </svg>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Giải trí ngoài trời</p>
                  <p className="text-sm text-foreground/60">
                    Giường tắm nắng, bể bơi và ăn uống ngoài trời thích hợp cho
                    các chuyến đi mùa hè.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "24px",
                    width: "24px",
                    fill: "currentcolor",
                  }}
                >
                  <path d="m15.59 1.91 1.02.8C22.17 7.04 25 11.46 25 15.98a8.99 8.99 0 0 1-.5 3.02H31v2h-2v9a1 1 0 0 1-.88 1H4a1 1 0 0 1-1-.88V21H1v-2h6.42c-.28-.9-.42-1.91-.42-3.01 0-2.25 1.1-4.82 3.27-7.75l.27-.35.55-.73 1.78 1.12L15.6 1.9zM27 21H5v8h22v-8zM16.4 5.1l-2.6 6.1-2.21-1.37-.17.24C9.87 12.3 9.07 14.2 9 15.77l-.01.21c0 1.1.17 2.04.48 2.85l.07.17h3a6.1 6.1 0 0 1-.05-.83c0-1.52.86-3.19 2.52-5.07l.24-.27.74-.81.74.8c1.82 2 2.76 3.76 2.76 5.35 0 .3-.02.57-.05.83h3.06l-.14-.07a6.7 6.7 0 0 0 .63-2.95c0-3.42-2.03-6.93-6.17-10.51l-.43-.36zm-.4 9.94-.08.1c-.9 1.14-1.36 2.11-1.41 2.88l-.01.15c0 .35.03.63.09.83h2.82c.06-.2.09-.48.09-.83 0-.79-.46-1.8-1.42-3.04l-.08-.1z"></path>
                </svg>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">
                    Trải nghiệm nhận phòng xuất sắc
                  </p>
                  <p className="text-sm text-foreground/60">
                    Những khách ở gần đây đã xếp hạng 5 sao cho quy trình nhận
                    phòng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "24px",
                    width: "24px",
                    fill: "currentcolor",
                  }}
                >
                  <path d="m15.59 1.91 1.02.8C22.17 7.04 25 11.46 25 15.98a8.99 8.99 0 0 1-.5 3.02H31v2h-2v9a1 1 0 0 1-.88 1H4a1 1 0 0 1-1-.88V21H1v-2h6.42c-.28-.9-.42-1.91-.42-3.01 0-2.25 1.1-4.82 3.27-7.75l.27-.35.55-.73 1.78 1.12L15.6 1.9zM27 21H5v8h22v-8zM16.4 5.1l-2.6 6.1-2.21-1.37-.17.24C9.87 12.3 9.07 14.2 9 15.77l-.01.21c0 1.1.17 2.04.48 2.85l.07.17h3a6.1 6.1 0 0 1-.05-.83c0-1.52.86-3.19 2.52-5.07l.24-.27.74-.81.74.8c1.82 2 2.76 3.76 2.76 5.35 0 .3-.02.57-.05.83h3.06l-.14-.07a6.7 6.7 0 0 0 .63-2.95c0-3.42-2.03-6.93-6.17-10.51l-.43-.36zm-.4 9.94-.08.1c-.9 1.14-1.36 2.11-1.41 2.88l-.01.15c0 .35.03.63.09.83h2.82c.06-.2.09-.48.09-.83 0-.79-.46-1.8-1.42-3.04l-.08-.1z"></path>
                </svg>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Hủy miễn phí</p>
                  <p className="text-sm text-foreground/60">
                    Được hoàn tiền đầy đủ nếu bạn thay đổi kế hoạch.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="space-y-4">
              <p className="text-[15px] text-foreground/80">
                HN HOMES – Không gian nghỉ dưỡng ấm áp giữa lòng Sài Gòn <br />
                <br />
                Nằm ngay mặt tiền đường Hoàng Sa, Quận 1 – một cung đường dọc bờ
                kênh yên bình, không kẹt xe và khói bụi, HN HOMES là nơi lý
                tưởng để bạn tìm về sự thư giãn, tạm lánh xa những ồn ào náo
                nhiệt của thành phố. Với thiết kế 1 phòng ngủ riêng biệt và
                không gian bếp tách biệt, mỗi khoảnh khắc tại đây đều mang đến
                cảm giác ấm áp, dịu dàng, hòa mình vào không gian thơ mộng với
                tầm nhìn sông lãng mạn và ánh sáng tự nhiên tràn ngập khắp
                nơi...
              </p>
              <Dialog>
                <DialogTrigger>
                  <Button variant={"secondary"} size={"lg"}>
                    <p className="text-[15px] font-medium">Read more</p>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[768px] rounded-3xl px-0">
                  <ScrollArea className="h-[80vh]  overflow-auto px-6">
                    <div className="space-y-6">
                      <p className="text-[22px] font-semibold mt-4 text-foreground">
                        Giới thiệu về chỗ ở này
                      </p>
                      <p className="h-full text-[15px] text-foreground/80">
                        HN HOMES – Không gian nghỉ dưỡng ấm áp giữa lòng Sài Gòn
                        <br />
                        <br />
                        Nằm ngay mặt tiền đường Hoàng Sa, Quận 1 – một cung
                        đường dọc bờ kênh yên bình, không kẹt xe và khói bụi, HN
                        HOMES là nơi lý tưởng để bạn tìm về sự thư giãn, tạm
                        lánh xa những ồn ào náo nhiệt của thành phố. Với thiết
                        kế 1 phòng ngủ riêng biệt và không gian bếp tách biệt,
                        mỗi khoảnh khắc tại đây đều mang đến cảm giác ấm áp, dịu
                        dàng, hòa mình vào không gian thơ mộng với tầm nhìn sông
                        lãng mạn và ánh sáng tự nhiên tràn ngập khắp nơi. <br />
                        <br />{" "}
                        <span className="text-foreground font-semibold">
                          Chỗ ở{" "}
                        </span>
                        <br />
                        <br />- Toà nhà có thang máy và bãi để xe máy. <br />
                        <br />- Không gian thoáng đãng, ngập tràn ánh sáng tự
                        nhiên Căn hộ được thiết kế mở, tận dụng tối đa ánh sáng
                        tự nhiên qua những khung cửa sổ lớn. Mỗi buổi sáng, hãy
                        để ánh nắng nhẹ nhàng đánh thức bạn, kèm theo làn gió
                        mát từ sông thổi vào, mang đến sự thư thái và nguồn năng
                        lượng tươi mới. <br />
                        <br />- Khung cảnh lãng mạn bên cửa sổ <br />
                        <br />- Công viên ven sông với nhiều mảng xanh và dụng
                        cụ thể dục thể thao đầy đủ giúp bạn có những chuyễn lưu
                        trú tràn đầy năng lượng <br />
                        <br />- Bạn sẽ được ngắm nhìn dòng sông hiền hòa, nơi
                        từng con thuyền lướt qua như những nét chấm phá yên bình
                        giữa lòng thành phố sôi động. Đây là không gian hoàn hảo
                        để nhâm nhi một tách cà phê, đọc một cuốn sách hay đơn
                        giản là thả mình vào những phút giây yên ả. <br />
                        <br />- Không gian rất phù hợp để bạn có những chuyến
                        công tác dài ngày, đem đến những sự sáng tạo với hiệu
                        quả công việc khi lưu trú. <br />
                        <br />- HN HOMES nằm tại vị trí trung tâm đắc địa, dễ
                        dàng di chuyển, chỉ cách các điểm tham quan nổi tiếng
                        một quãng ngắn: <br />
                        <br />
                        • Chợ Bến Thành ~3 km <br />
                        <br />• Dinh Độc Lập ~2,5 km <br />
                        <br />• Nhà thờ Đức Bà Sài Gòn ~2 km <br />
                        <br />• Bưu điện Trung tâm Sài Gòn ~2 km <br />
                        <br />• Phố đi bộ Nguyễn Huệ ~3 km <br />
                        <br />• Bảo tàng Chứng tích Chiến tranh ~2,5 km <br />
                        <br />• Phố Tây Bùi Viện ~4 km <br />
                        <br />• Thảo Cầm Viên Sài Gòn ~2 km <br />
                        <br />• Landmark 81 ~5 km <br />
                        <br />
                        <span className="text-foreground font-semibold">
                          Tiện nghi khách có quyền sử dụng
                        </span>
                        <br />
                        <br />- Căn hộ thiết kế với 1 phòng ngủ tách bếp riêng
                        biệt. <br />
                        <br />- Bàn làm việc, giường cỡ lớn êm ái tích hợp trong
                        hệ nội thất thông minh đầy đủ chăn, gối sạch sẽ. 1
                        giường sofa dài 1.6m có thể ngả thành giường cho trẻ em.
                        <br />
                        <br />- Phòng tắm có hệ thống nước nóng lạnh sử dụng
                        năng lượng mặt trời, xà phòng, dầu gội, khăn tắm và đồ
                        cá nhân cần thiết. <br />
                        <br />- Nhà bếp : Với bếp từ, tủ lạnh, lò vi sóng, nồi
                        cơm điện, ấm đun nước và đầy đủ dụng cụ nấu nướng, căn
                        bếp giúp bạn tự tay chuẩn bị những bữa ăn ấm cúng, tràn
                        đầy yêu thương. <br />
                        <br />- Máy giặt trong phòng và khu vực phơi đồ ngoài
                        cửa sổ, máy hút bụi ở tủ bếp. <br />
                        <br />- Bàn là, máy sấy tóc và móc treo có sẵn trong tủ
                        <br />
                        <br />- Ngoài ra, bạn còn có thể thưởng thức các loại
                        trà, cà phê, bánh, kẹo và một số món ăn liền tiện lợi,
                        mang đến trải nghiệm ẩm thực đa dạng và tiện nghi ngay
                        tại căn hộ. <br />
                        <br />- Giải trí hiện đại với Smart TV kết nối Netflix,
                        Wi-Fi tốc độ cao và không gian được điều hòa thoáng mát.
                        <br />
                        <br />- Bãi xe máy miễn phí dưới tầng G. <br />
                        <br />
                        <span className="text-foreground font-semibold">
                          Những điều cần lưu ý khác
                        </span>
                        <br />
                        <br />- Lưu ý luôn khóa cửa an toàn cho dù bạn đang ở
                        trong hoặc ra khỏi nhà. Bạn có thể mang theo bộ chìa
                        khóa trong suốt thời gian ở. Bộ khóa bạn có: Thẻ phòng,
                        khoá cửa cuốn. <br />
                        <br />- Cửa cuốn tự động sẽ đóng sau 24:00 giờ đêm, nếu
                        bạn check in trễ hơn, hãy cho tôi biết rõ lịch trình,
                        tôi sẽ hỗ trợ bạn <br />
                        <br />- Nếu bạn có xe máy, hãy để xe tại tầng G của toà
                        nhà (bãi để xe hoàn toàn miễn phí) và khoá cửa nhà cẩn
                        thận. <br />
                        <br />- Bạn hãy tôn trọng nhà của chúng tôi, hàng xóm
                        của chúng tôi. Để đảm bảo một kỳ nghỉ thú vị và không
                        ảnh hưởng đến người dân địa phương. <br />
                        <br />- Sau 22 giờ tối là thời gian yên tĩnh, bạn giúp
                        chúng tôi không nói chuyện quá lớn tiếng. Người dân địa
                        phương ngủ sớm để chuẩn bị cho buổi sáng sớm hôm sau.{" "}
                        <br />
                        <br />- Vui lòng gửi hình ảnh giấy tờ tuỳ thân (Cccd/hộ
                        chiếu) của bạn khi đến để chúng tôi có thể đăng ký thời
                        gian ở của bạn. Đây là luật, nhưng cũng vì sự an toàn
                        của chính bạn. <br />
                        <br />- Không hút thuốc và sử dụng chất cấm tại phòng.{" "}
                        <br />
                        <br />- Vui lòng dọn dẹp dụng cụ nấu ăn sau khi sử dụng.
                        <br />
                        <br />- Trong trường hợp bạn làm hư hại, mất mát hoặc
                        làm hỏng tài sản hoặc đồ đạc trong căn hộ. Khách hàng
                        vui lòng bồi thường cho căn hộ với giá trị chính xác của
                        tài sản bị hư hỏng tại thời điểm xảy ra thiệt hại.
                      </p>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
            <hr />
            <p className="text-[22px] font-medium">
              Nơi này có những gì cho bạn
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-8">
                <div className="space-y-0.5 flex items-center">
                  <div className="min-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                  <p className="text-[15px]">Hướng nhìn ra kênh</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="space-y-0.5 flex items-center">
                  <div className="min-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                  <p className="text-[15px]">Ven sông/hồ/biển</p>
                </div>
              </div>{" "}
              <div className="flex items-start gap-8">
                <div className="space-y-0.5 flex items-center">
                  <div className="min-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                  <p className="text-[15px]">Hướng nhìn ra công viên</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="space-y-0.5 flex items-center">
                  <div className="min-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                  <p className="text-[15px]">Hướng nhìn ra công viên</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="space-y-0.5 flex items-center">
                  <div className="min-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                  <p className="text-[15px]">Hướng nhìn ra công viên</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="space-y-0.5 flex items-center">
                  <div className="min-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                  <p className="text-[15px]">Hướng nhìn ra công viên</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="space-y-0.5 flex items-center">
                  <div className="min-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                  <p className="text-[15px]">Hướng nhìn ra công viên</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="space-y-0.5 flex items-center">
                  <div className="min-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                  <p className="text-[15px]">Hướng nhìn ra công viên</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex justify-end">
            <div className="w-96 pl-2 space-y-4">
              <div className="w-full h-12 flex items-center justify-center rounded-xl shadow-md border">
                <p className="font-medium">Giá đã bao gồm mọi khoản phí</p>
              </div>
              <div className="w-full p-6 flex flex-col  rounded-xl shadow-md border">
                <div className="flex items-end gap-2 mb-4">
                  <p className="font-semibold text-[21px] underline underline-offset-2">
                    đ{homestayData.data.pricePerNight.toLocaleString("vi-VN")}
                  </p>
                  <p className="text-[15px] mb-0.5">cho 1 đêm</p>
                </div>

                <Button className="h-12">Đặt phòng ngay</Button>
                <p className="mt-4 text-center">Bạn đang gặp vấn đề?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomDetailPage;
