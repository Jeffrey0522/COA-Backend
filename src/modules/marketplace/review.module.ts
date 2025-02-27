import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { ReviewRepository } from './repositories/review.repository';
import { ReviewService } from './services/review.service';
import { ReviewController } from './controllers/review.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [ReviewRepository, ReviewService],
  controllers: [ReviewController],
  exports: [ReviewService],
})
export class ReviewModule {}
