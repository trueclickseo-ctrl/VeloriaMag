import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      where: { status: 'PUBLISHED' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        topicCluster: true,
        primaryKeyword: true,
        metaTitle: true,
        metaDescription: true,
        publishedAt: true,
      },
    });

    return NextResponse.json({
      status: 'success',
      results: articles.length,
      data: articles,
    });
  } catch (error) {
    console.error('API execution failed:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to retrieve articles catalog' },
      { status: 500 }
    );
  }
}
