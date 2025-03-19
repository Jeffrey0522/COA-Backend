import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StarknetService } from './starknet.service';
import { ConfigService } from '@/common/config.service';
import { StarknetController } from './starknet.controller';
import {
  blockchainConfig,
  blockchainValidationSchema,
} from '@/config/blockchain.config';

@Module({
  imports: [ConfigModule.forFeature(blockchainConfig)],
  providers: [StarknetService, ConfigService],
  controllers: [StarknetController],
  exports: [StarknetService],
})
export class BlockchainModule {}
