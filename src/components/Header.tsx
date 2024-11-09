import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Button from "./Button";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "해외 개발자 원격 채용", href: "#", current: false },
  { name: "해외 개발자 활용 서비스", href: "#", current: false },
  { name: "외국인 원격 채용 (비개발 직군)", href: "#", current: false },
  { name: "한국어 가능 외국인 채용", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header: React.FC = () => {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                src="/images/logo.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
            </div>
            <div className="hidden sm:ml-6 sm:block m-auto">
              <div className="flex space-x-4">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full text-sm focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <a
                        href={"#"}
                        className={
                          "rounded-md inline-flex justify-center gap-x-1.5 text-white no-underline px-3 py-2 text-sm font-medium"
                        }
                      >
                        채용{" "}
                        <svg
                          className="-mr-1 h-5 w-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-3 py-2 no-underline text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        해외 개발자 원격 채용
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-3 py-2 no-underline text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        외국인 원격 채용 (비개발 직군){" "}
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-3 py-2 no-underline text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        한국어 가능 외국인 채용
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>

                <a
                  href={"#"}
                  className={
                    "rounded-md px-3 text-white no-underline py-2 text-sm font-medium"
                  }
                >
                  해외 개발자 활용 서비스
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 md:flex hidden items-center pr-2   sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button classnames="btn btn-light btn-size-md">
              문의하기
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative  border inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-3 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current ? "bg-gray-900 text-white" : "text-white",
                "block rounded-md py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <Button classnames="btn btn-light btn-size-md w-[40%]" type="submit">
            문의하기
          </Button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
