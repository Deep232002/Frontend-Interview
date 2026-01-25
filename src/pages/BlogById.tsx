import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import BlogDetail from '../components/BlogDetail';
import Feature from '../components/Feature';
import BlogSkeleton from '../components/BlogSkeleton';
import { getBlogs } from '../api/blogs';

const BlogById: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  });

  if (isLoading) return <BlogSkeleton />;
  if (error) return <p className="text-red-500 text-center">Failed to load blogs</p>;

  const featuredBlogs = data?.filter((blog: any) => blog.id !== id) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Featured Section */}
        <aside className="order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold mb-5 border-l-4 border-blue-600 pl-3">
              Featured News
            </h2>

            {/* Desktop */}
            <div className="hidden lg:flex flex-col gap-5">
              {featuredBlogs.map((blog: any) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <Feature blog={blog} />
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
              <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
                {featuredBlogs.map((blog: any) => (
                  <SwiperSlide key={blog.id}>
                    <div className="bg-white rounded-xl shadow-sm">
                      <Feature blog={blog} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </aside>

        {/* Main Blog */}
        <main className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-4">
              Latest News
            </h1>
            <BlogDetail id={id!} />
          </div>
        </main>

      </div>
    </div>
  );
};

export default BlogById;
